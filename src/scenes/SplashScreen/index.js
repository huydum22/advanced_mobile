import React, {useEffect, useContext} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as screenName from '../../Constants/ScreenName';
import {Styles, Size} from '../../styles';
import {CategoryContext} from '../../Provider/Category';
import logo from '../../assets/image/logoItEdu.png';
import name from '../../assets/image/nameItEdu.png';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {SearchAllCategoryAPI} from '../../services/Category';
const SplashScreen = (props) => {
  const {navigation} = props;
  const {getItem} = useAsyncStorage('@userToken');
  const {setListCategory} = useContext(CategoryContext);
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

      // value previously stored
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
      let response = await SearchAllCategoryAPI();
      setListCategory(response.data.payload);
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    getData();
    fetchCategory();
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
