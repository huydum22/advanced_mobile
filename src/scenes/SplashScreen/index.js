import React, {useEffect, useContext} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as screenName from '../../Constants/ScreenName';
import {Styles, Size} from '../../styles';
import {CategoryContext} from '../../Provider/Category';
import {SearchAllCategoryAPI} from '../../services/Category';
import logo from '../../assets/image/logoItEdu.png';
import name from '../../assets/image/nameItEdu.png';

const SplashScreen = (props) => {
  const {navigation} = props;
  const {setListCategory} = useContext(CategoryContext);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await SearchAllCategoryAPI();
        setListCategory(res.data.payload);
        const value = await AsyncStorage.getItem('@userToken');
        console.log('test ', value);
        if (value !== null) {
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
      } catch (e) {
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
  }, [navigation, setListCategory]);
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
