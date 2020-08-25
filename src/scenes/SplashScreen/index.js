import React, {useEffect, useContext} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as screenName from '../../Constants/ScreenName';
import {Styles, Size, darkTheme, lightTheme} from '../../styles';
import {CategoryContext} from '../../Provider/Category';
import logo from '../../assets/image/logoItEdu.png';
import name from '../../assets/image/nameItEdu.png';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {ThemeContext} from '../../Provider/Theme';
import {LocalizeContext} from '../../Provider/Localize';
import {vn, en} from '../../Constants/localize';
import {useState} from 'react';
const SplashScreen = (props) => {
  const {navigation} = props;
  const {getItem} = useAsyncStorage('@userToken');
  const {categoryProvider, category} = useContext(CategoryContext);
  const {setTheme} = useContext(ThemeContext);
  const [getThemeSuccess, setThemeSuccess] = useState(false);
  const [getLanguageSuccess, setLanguageSuccess] = useState(false);

  const {setLocalize} = useContext(LocalizeContext);
  const getDarkMode = useAsyncStorage('@setTheme');
  const setLanguage = useAsyncStorage('@setLanguage');
  useEffect(() => {
    const getTheme = async () => {
      const item = await getDarkMode.getItem();
      const jsonValue = JSON.parse(item);
      if (jsonValue) {
        if (jsonValue.dark) {
          setTheme(darkTheme);
          setThemeSuccess(true);
        } else {
          setTheme(lightTheme);
          setThemeSuccess(true);
        }
      } else {
        setTheme(lightTheme);
        setThemeSuccess(true);
      }
    };
    const getEng = async () => {
      const item = await setLanguage.getItem();
      const jsonValue = JSON.parse(item);
      if (jsonValue) {
        if (jsonValue.en) {
          setLocalize(en);
          setLanguageSuccess(true);
        } else {
          setLocalize(vn);
          setLanguageSuccess(true);
        }
      } else {
        setLocalize(vn);
        setLanguageSuccess(true);
      }
    };
    const unsubscribe = navigation.addListener('focus', async () => {});
    categoryProvider();
    getTheme();
    getEng();
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    const getData = async () => {
      const item = await getItem();

      if (item !== null) {
        if (getThemeSuccess && getLanguageSuccess && !category.isLoading) {
          navigation.replace(screenName.AppTab, {
            screen: screenName.HomeScreenName,
          });
        }
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
    getData();
  }, [
    getThemeSuccess,
    getLanguageSuccess,
    category.isLoading,
    getItem,
    navigation,
  ]);

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
