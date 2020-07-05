import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Platform} from '../../styles';
import {FormInput, PrimaryButton} from '../../components/Authentication';

const ForgotPassword = (props) => {
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

  const handleForgotPassWord = () => {};

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
