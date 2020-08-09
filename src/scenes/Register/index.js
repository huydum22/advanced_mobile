import React, {useState, useEffect, useContext, useReducer} from 'react';
import {KeyboardAvoidingView, StyleSheet, Alert, Text} from 'react-native';
import {
  Platform,
  Styles,
  Typography,
  Colors,
  BoxModel,
  Size,
} from '../../styles';
import {FormInput, PrimaryButton} from '../../components/Authentication';
import {CheckBox} from 'react-native-elements';
import {REGISTER} from '../../Constants/API';
import {API} from '../../services';

import * as screenName from '../../Constants/ScreenName';
import userImage from '../../assets/image/user.jpg';

const SignUp = (props) => {
  const {navigation} = props;
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [name, setName] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };
  const onChangeName = (txtName) => {
    setName(txtName);
  };
  const onChangePhoneNumber = (txtPhone) => {
    setPhoneNumber(txtPhone);
  };
  const onChangePassword = (pass) => {
    setPassword(pass);
  };
  const onChangeConfirmPassword = (pass) => {
    setConfirmPassword(pass);
  };
  const onPressShowPass = () => {
    setShowPass(!showPass);
  };
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
    } else {
      if (password.length < 8 || password.length > 20) {
      } else {
        try {
          let response = await API.post(REGISTER, {
            username: name,
            phone: phoneNumber,
            email: email,
            password: password,
          });
          if (response.isSuccess) {
            Alert.alert('Register success, confirm your email');
            navigation.navigate(screenName.LoginScreenName, {
              email: email,
              password: password,
            });
          } else {
            Alert.alert(response.data.message);
          }
        } catch (response) {
          Alert.alert(response);
        }
      }
    }
  };

  useEffect(() => {
    if (
      email !== '' &&
      password !== '' &&
      name !== '' &&
      phoneNumber !== '' &&
      confirmPassword !== ''
    ) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [email, password, name, phoneNumber, confirmPassword]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <Text style={styles.headerText}>Please complete the form to sign up</Text>

      <FormInput
        placeholder="Your Name"
        value={name}
        onChangeText={onChangeName}
        autoCorrect={false}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder="Your Phone Number"
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        autoCorrect={false}
        keyboardType="phone-pad"
        returnKeyType={'next'}
      />
      <FormInput
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        autoCorrect={false}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder="Password"
        value={password}
        onChangeText={onChangePassword}
        autoCorrect={false}
        secureTextEntry={!showPass}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={onChangeConfirmPassword}
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
      <PrimaryButton
        title="John With Us"
        onPress={handleRegister}
        active={activeBtn}
      />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  headerText: {
    ...Typography.fontRegular,
    ...BoxModel.smallMarginVertical,
    textAlign: 'center',
    fontSize: Typography.fontSize16,
  },
  imageContainer: {
    ...Styles.center,
  },
  image: {
    width: Size.scaleSize(150),
    height: Size.scaleSize(150),
  },
});
export default SignUp;
