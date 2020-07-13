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
import * as screenName from '../../Constants/ScreenName';
import {CheckBox} from 'react-native-elements';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {TokenContext} from '../../Provider/Token';
import {FormInput, PrimaryButton} from '../../components/Authentication';
import {AuthenticationContext} from '../../Provider/Authentication';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Login = (props) => {
  const {navigation} = props;
  const {state, loginProvider} = useContext(AuthenticationContext);
  const {setItem} = useAsyncStorage('@userToken');
  const {setToken} = useContext(TokenContext);
  const [email, setEmail] = useState('testitedu@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [formState, setFormState] = useState({
    showPass: false,
    activeBtn: false,
    values: {},
    isLoading: false,
  });

  useEffect(() => {
    const storeData = async (value) => {
      try {
        await setItem(value);
      } catch (e) {
        // saving error
      }
    };
    if (state.token) {
      storeData(state.token);
      setToken(state.token);
      // userProvider(setToken);
      navigation.replace(screenName.AppTab, {
        screen: screenName.HomeScreenName,
      });
    }
    if (state.token === null && state.message !== '') {
      Alert.alert(state.message);
    }
  });

  console.log(state);
  useEffect(() => {
    if (email !== '' && password !== '') {
      setFormState((formState) => ({
        ...formState,
        activeBtn: true,
      }));
    } else {
      setFormState((formState) => ({
        ...formState,
        activeBtn: false,
      }));
    }
  }, [email, password]);

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };

  const onChangePassword = (pass) => {
    setPassword(pass);
  };

  const handleLogin = async () => {
    return await loginProvider(email, password);
  };
  const onPressShowPass = () => {
    setFormState(() => ({
      ...formState,
      showPass: !formState.showPass,
    }));
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
        key="email"
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        autoCorrect={false}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder=" Password"
        value={password}
        key="password"
        onChangeText={onChangePassword}
        autoCorrect={false}
        secureTextEntry={!formState.showPass}
        returnKeyType={'done'}
      />
      <CheckBox
        title="Show Password"
        checked={formState.showPass}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{backgroundColor: Colors.overlayColor, borderWidth: 0}}
        textStyle={{...Typography.fontRegular}}
        onPress={onPressShowPass}
      />
      <PrimaryButton
        title="Sign In"
        onPress={handleLogin}
        active={formState.activeBtn}
      />
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
