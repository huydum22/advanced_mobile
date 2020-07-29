import React, {useState, useEffect, useContext, useReducer} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
} from 'react-native';
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
  const [email, setEmail] = useState('testitedu@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('0931270721');
  const [password, setPassword] = useState('12345678');
  const [name, setName] = useState('testaccount');
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
  const onPressShowPass = () => {
    setShowPass(!showPass);
  };
  const handleRegister = async () => {
    try {
      // const response = await RegisterAPI(name, phoneNumber, email, password);
      let response = await API.post(REGISTER, {
        username: name,
        phone: phoneNumber,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        navigation.navigate(screenName.LoginScreenName);
      }
    } catch ({response}) {
      Alert.alert(response.data.message);
      console.log(response);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (email !== '' && password !== '' && name !== '' && phoneNumber !== '') {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [email, password, name, phoneNumber]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <Text style={styles.headerText}>Please complete the form to sign up</Text>
      <View style={styles.imageContainer}>
        <Image source={userImage} style={styles.image} />
      </View>
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
