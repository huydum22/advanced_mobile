import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Alert} from 'react-native';
import {Platform} from '../../styles';
import {FormInput, PrimaryButton} from '../../components/Authentication';
import {FORGOT_PASSWORD} from '../../Constants/API';
import {API} from '../../services';

import * as screenName from '../../Constants/ScreenName';
const ForgotPassword = (props) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (email !== '') {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  });

  const handleForgotPassWord = async () => {
    try {
      const response = await API.post(FORGOT_PASSWORD, {email: email});

      if (response.isSuccess) {
        Alert.alert(response.data.message);
        navigation.navigate(screenName.LoginScreenName);
      } else {
        Alert.alert(response.data.message);
      }
    } catch ({response}) {
      Alert.alert(response.data.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <FormInput
        placeholder=" Email Address"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        autoCorrect={false}
        returnKeyType={'next'}
      />
      <PrimaryButton
        title="Send email"
        onPress={handleForgotPassWord}
        active={activeBtn}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default ForgotPassword;
