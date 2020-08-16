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
import {FormInput, PrimaryButton} from '../../components/Authentication';
import {AuthenticationContext} from '../../Provider/Authentication';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
const Login = (props) => {
  const {navigation, route} = props;
  const {state, loginProvider, loginGGProvider} = useContext(
    AuthenticationContext,
  );
  const {setItem} = useAsyncStorage('@userToken');
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState(route.params.password);
  const [formState, setFormState] = useState({
    showPass: false,
    activeBtn: false,
    values: {},
    isLoading: false,
  });
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '975229274473-erin9kavni380rv8skf4ob2j8pko7rr3.apps.googleusercontent.com',
    });
  }, []);
  useEffect(() => {
    if (state.token) {
      navigation.replace(screenName.AppTab, {
        screen: screenName.HomeScreenName,
      });
    }
    if (state.token === null && state.message !== '') {
      Alert.alert(state.message);
    }
  }, [state, navigation]);
  const gg_signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();
      loginGGProvider(user.email, user.id);
      let value = {email: user.email, id: user.id};
      storeData(value);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
      }
    }
  };

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

  const onPressShowPass = () => {
    setFormState(() => ({
      ...formState,
      showPass: !formState.showPass,
    }));
  };
  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };

  const onChangePassword = (pass) => {
    setPassword(pass);
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const handleLogin = async () => {
    loginProvider(email, password);
    let value = {email: email, password: password};
    storeData(value);
  };

  const onPressForgotPassWord = () => {
    navigation.navigate(screenName.ForgotPasswordScreenName);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <Ionicons.Button
        name="logo-google"
        color={Colors.whiteColor}
        backgroundColor="white"
        onPress={gg_signIn}
        underlayColor="rgba(0,0,0,0)"
        style={[
          styles.socialSignInContainer,
          {backgroundColor: Colors.googleBackground},
        ]}>
        sign in with Google
      </Ionicons.Button>
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
