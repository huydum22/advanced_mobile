import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import logo from '../../../../assets/logo.png';
import RegisterButton from '../common/button';
import LoginButton from '../common/subButton';

import Form from '../common/form-text-input';
import constants from '../../../config/constants';
import colors from '../../../config/color';
const Register = (props) => {
  const handleLoginPress = () => {
    console.log({email});
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };

  const onChangePassword = (pass) => {
    setPassword(pass);
  };
  const onChangeConfirmPassword = (confirmPass) => {
    setConfirmPassword(confirmPass);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={constants.IOS ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Register Now!</Text>
      </View>
      <View style={styles.form}>
        <Form
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType={'next'}
          icon="user"
        />
        <Form
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
          returnKeyType={'done'}
          icon="lock"
        />
        <Form
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
          returnKeyType={'done'}
          icon="lock"
        />
        <RegisterButton title="Register" onPress={handleLoginPress} />
        <LoginButton title="Log In" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.mainColor,
  },
  logoContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    opacity: 1,
    marginTop: 10,
    fontWeight: 'bold',
  },
  logo: {
    width: 120,
    height: 120,
  },

  form: {
    flex: 5,
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
});
export default Register;
