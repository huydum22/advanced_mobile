import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Intro from '../../components/intro';
import * as screenName from '../../config/ScreenName';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {
  Styles,
  Size,
  Colors,
  BoxModel,
  Distance,
  Typography,
} from '../../styles';
import {color} from 'react-native-reanimated';
const Introduce = (props) => {
  const {navigation, route} = props;
  const onPressSignIn = () => {
    navigation.navigate(screenName.LoginScreenName);
  };
  const onPressSignUp = () => {
    navigation.navigate(screenName.RegisterScreenName);
  };
  const onPressForgotPassWord = () => {
    navigation.navigate(screenName.ForgotPasswordScreenName);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {color: Colors.primaryColor}]}>
          Online Course
        </Text>
      </View>
      <Intro />
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[
            styles.signUpBtn,
            {
              backgroundColor: Colors.primaryBackgroundColor,
              borderColor: Colors.primaryColor,
            },
          ]}
          onPress={onPressSignUp}
          underlayColor={Colors.overlayColor}>
          <Text style={[styles.text, {color: Colors.primaryColor}]}>
            Sign Up
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[
            styles.signInBtn,
            {
              backgroundColor: Colors.primaryColor,
            },
          ]}
          onPress={onPressSignIn}
          underlayColor={Colors.overlayColor}>
          <Text style={[styles.text, {color: Colors.primaryBackgroundColor}]}>
            Sign In
          </Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        style={styles.forgotPassContainer}
        onPress={onPressForgotPassWord}
        underlayColor={Colors.overlayColor}>
        <Text style={[styles.textForgotPass, {color: Colors.grayColor}]}>
          Forgot your Password?
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    height: Size.scaleSize(100),
    width: Size.WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  signUpBtn: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(45),
    borderWidth: Distance.superSmall,
    width: Size.WIDTH / 2 - 20,
  },
  signInBtn: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(45),
    width: Size.WIDTH / 2 - 20,
  },
  text: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  header: {
    marginTop: Size.scaleSize(20),
    height: Size.scaleSize(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...Typography.fontBold,
    fontSize: Size.scaleFont(50),
  },
  forgotPassContainer: {
    ...BoxModel.smallMarginVertical,
  },
  textForgotPass: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    textAlign: 'center',
  },
});
export default Introduce;
