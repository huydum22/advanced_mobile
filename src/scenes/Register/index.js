import React, {useState, useContext} from 'react';
import {View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import {
  PrimaryButton,
  SubPrimaryButton,
  FormInput,
} from '../../components/Authentication';
import logo from '../../assets/image/logo_.png';

// import prettyFormat from 'pretty-format';
import {Colors, Styles, BoxModel, Platform} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
const Register = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation} = props;
  const handleLoginPress = () => {
    return navigation.goBack();
  };
  const handleRegisterPress = () => {
    return navigation.popToTop();
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
      style={[styles.container, {backgroundColor: theme.primaryColor}]}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={Styles.logoView} />
      </View>
      <View
        style={[styles.form, {backgroundColor: theme.primaryBackgroundColor}]}>
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
        <FormInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
          returnKeyType={'done'}
          icon="lock"
        />
        <PrimaryButton title="Register" onPress={handleRegisterPress} />
        <SubPrimaryButton title="Log In" onPress={handleLoginPress} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    flex: 1,
  },
  logoContainer: {
    flex: 4,
    ...Styles.center,
  },
  form: {
    ...BoxModel.mediumBorderTopLeft,
    ...Styles.width100,
    ...BoxModel.mediumPadding,
    ...Styles.mainStart,
    flex: 5,
  },
});
export default Register;
