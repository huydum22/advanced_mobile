import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/image/logo_.png';
import {
  PrimaryButton,
  SubPrimaryButton,
  FormInput,
} from '../../components/Authentication';
import {Colors, BoxModel, Styles, Typography, Platform} from '../../styles';
import {
  RegisterScreenName,
  HomeScreenName,
  AppTab,
} from '../../config/ScreenName';
// format debug consol

const Login = (props) => {
  const {navigation} = props;
  const handleLoginPress = () => {
    navigation.replace(AppTab, {screen: HomeScreenName});
  };
  const handleRegisterPress = () => {
    return navigation.navigate(RegisterScreenName);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };

  const onChangePassword = (pass) => {
    setPassword(pass);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={Styles.logoView} />
      </View>
      <View style={styles.form}>
        <FormInput
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType={'next'}
          icon="user"
        />
        <FormInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
          returnKeyType={'done'}
          icon="lock"
        />
        <TouchableOpacity>
          <Text style={styles.txtForgotPass}>Forgot password?</Text>
        </TouchableOpacity>
        <PrimaryButton title="Log In" onPress={handleLoginPress} />
        <SubPrimaryButton title="Register" onPress={handleRegisterPress} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  logoContainer: {
    ...Styles.center,
    flex: 4,
  },
  form: {
    ...BoxModel.mediumBorderTopLeft,
    ...Styles.width100,
    ...BoxModel.mediumPadding,
    ...Styles.mainStart,
    flex: 5,
    backgroundColor: Colors.whiteColor,
  },
  txtForgotPass: {
    ...BoxModel.smallMarginVertical,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
    color: Colors.primaryColor,
  },
});
export default Login;
