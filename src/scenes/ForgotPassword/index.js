import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Alert} from 'react-native';
import {Platform} from '../../styles';
import {FormInput, PrimaryButton} from '../../components/Authentication';
import {ForgotPasswordAPI} from '../../services/Authentication';
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
      const response = await ForgotPasswordAPI(email);
      console.log(response);
      if (response.status === 200) {
        navigation.navigate(screenName.LoginScreenName);
      }
    } catch ({response}) {
      Alert.alert(response.data.message);
      console.log(response);
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
