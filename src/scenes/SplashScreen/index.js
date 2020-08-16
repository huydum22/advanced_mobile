import React, {useEffect, useContext} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as screenName from '../../Constants/ScreenName';
import {Styles, Size, darkTheme, lightTheme} from '../../styles';
import {CategoryContext} from '../../Provider/Category';
import logo from '../../assets/image/logoItEdu.png';
import name from '../../assets/image/nameItEdu.png';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {ALL_CATEGORY} from '../../Constants/API';
import {API} from '../../services';
import {ThemeContext} from '../../Provider/Theme';
import {LocalizeContext} from '../../Provider/Localize';
import {vn, en} from '../../Constants/localize';
const SplashScreen = (props) => {
  const {navigation} = props;
  const {getItem} = useAsyncStorage('@userToken');
  const {setListCategory} = useContext(CategoryContext);
  const {setTheme} = useContext(ThemeContext);
  const {localize, setLocalize} = useContext(LocalizeContext);
  const getDarkMode = useAsyncStorage('@setTheme');
  const setLanguage = useAsyncStorage('@setLanguage');

  const getTheme = async () => {
    const item = await getDarkMode.getItem();
    const jsonValue = JSON.parse(item);
    if (jsonValue) {
      if (jsonValue.dark) {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    } else {
      setTheme(lightTheme);
    }
  };
  const getEng = async () => {
    const item = await setLanguage.getItem();
    const jsonValue = JSON.parse(item);
    console.log(jsonValue);
    if (jsonValue) {
      if (jsonValue.en) {
        setLocalize(en);
      } else {
        setLocalize(vn);
      }
    } else {
      setLocalize(vn);
    }
  };
  const getData = async () => {
    const item = await getItem();

    if (item !== null) {
      setTimeout(
        () =>
          navigation.replace(screenName.AppTab, {
            screen: screenName.HomeScreenName,
          }),
        2000,
      );
    } else {
      setTimeout(
        () =>
          navigation.replace(screenName.AuthenticateTab, {
            screen: screenName.IntroScreenName,
          }),
        2000,
      );
    }
  };
  const fetchCategory = async () => {
    try {
      let response = await API.get(ALL_CATEGORY);
      if (response.isSuccess) {
        setListCategory(response.data.payload);
      }
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    getData();
    fetchCategory();
    getTheme();
    getEng();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={[Styles.center, styles.container]}>
      <Image source={logo} style={styles.logoContainer} />
      <Image source={name} style={styles.nameContainer} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  logoContainer: {
    width: Size.scaleSize(250),
    height: Size.scaleSize(250),
    resizeMode: 'contain',
  },
  nameContainer: {
    width: Size.scaleSize(250),
    height: Size.scaleSize(50),
    resizeMode: 'contain',
  },
});
export default SplashScreen;
