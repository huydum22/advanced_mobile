import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import {
  Styles,
  Size,
  BoxModel,
  Colors,
  Distance,
  Typography,
  Platform,
} from '../../styles';
import * as screenName from '../../config/ScreenName';
import {CheckBox} from 'react-native-elements';

import {TouchableHighlight} from 'react-native-gesture-handler';
import {FormInput, PrimaryButton} from '../../components/Authentication';
import {LoginProvider} from '../../services/Authentication';
import {AuthenticationContext} from '../../Provider/Authentication';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Login = (props) => {
  const {navigation} = props;
  const [showPass, setShowPass] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const {authentication, setAuthentication} = useContext(AuthenticationContext);
  useEffect(() => {
    if (
      authentication &&
      authentication.status === 200 &&
      authentication.isLogin
    ) {
      navigation.replace(screenName.AppTab, {
        screen: screenName.HomeScreenName,
      });
    }
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (email !== '' && password !== '') {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  });

  const handleRegisterPress = () => {
    return navigation.navigate(screenName.RegisterScreenName);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };

  const onChangePassword = (pass) => {
    setPassword(pass);
  };

  const handleLogin = async () => {
    try {
      let response = await LoginProvider(email, password);
      if (response.status === 200) {
        setAuthentication(response);
      } else {
        Alert.alert('Login Notification', response.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onPressShowPass = () => {
    setShowPass(!showPass);
  };

  const onPressForgotPassWord = () => {
    navigation.navigate(screenName.ForgotPasswordScreenName);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <TouchableHighlight
        style={[
          styles.socialSignInContainer,
          {backgroundColor: Colors.googleBackground},
        ]}>
        <View style={Styles.rowCenter}>
          <Ionicons name="logo-google" size={35} color={Colors.whiteColor} />
          <Text style={[styles.textSocialSignIn, {color: Colors.whiteColor}]}>
            sign in with Google
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.socialSignInContainer,
          {backgroundColor: Colors.facebookBackground},
        ]}>
        <View style={Styles.rowCenter}>
          <Ionicons name="logo-facebook" size={35} color={Colors.whiteColor} />
          <Text style={[styles.textSocialSignIn, {color: Colors.whiteColor}]}>
            sign in with Facebook
          </Text>
        </View>
      </TouchableHighlight>
      <FormInput
        placeholder=" Email Address"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        autoCorrect={false}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder=" Password"
        value={password}
        onChangeText={onChangePassword}
        autoCorrect={false}
        secureTextEntry={!showPass}
        returnKeyType={'done'}
      />
      <CheckBox
        title="Show Password"
        checked={showPass}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{backgroundColor: Colors.overlayColor, borderWidth: 0}}
        textStyle={{...Typography.fontRegular}}
        onPress={onPressShowPass}
      />
      <PrimaryButton title="Sign In" onPress={handleLogin} active={activeBtn} />
      <TouchableHighlight
        style={styles.forgotPassContainer}
        onPress={onPressForgotPassWord}
        underlayColor={Colors.overlayColor}>
        <Text style={[styles.textForgotPass, {color: Colors.grayColor}]}>
          Forgot your Password?
        </Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  socialSignInContainer: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    ...BoxModel.margin,
    height: Size.scaleSize(45),
  },
  textSocialSignIn: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_10,
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
export default Login;
