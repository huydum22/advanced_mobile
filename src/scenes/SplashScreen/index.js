import React, {useEffect, useContext} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as screenName from '../../Constants/ScreenName';
import {Styles, Size} from '../../styles';
import {CategoryContext} from '../../Provider/Category';
import {TokenContext} from '../../Provider/Token';
import {AuthenticationContext} from '../../Provider/Authentication';
import {SearchAllCategoryAPI} from '../../services/Category';
import logo from '../../assets/image/logoItEdu.png';
import name from '../../assets/image/nameItEdu.png';

const SplashScreen = (props) => {
  const {navigation} = props;
  const {setListCategory} = useContext(CategoryContext);
  const {token} = useContext(TokenContext);
  const {userProvider} = useContext(AuthenticationContext);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await SearchAllCategoryAPI();
        setListCategory(res.data.payload);
        if (token !== null) {
          userProvider(token);
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
      } catch (e) {}
    };
    getData();
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
