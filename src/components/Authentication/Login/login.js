import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import logo from '../../../../assets/logo.png';
import Button from '../common/button';
import Form from '../common/form-text-input';

const Login = (props) => {
  const handleLoginPress = () => {
    console.log({email});
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };

  const onChangePassword = (pass) => {
    setPassword(pass);
  };
  const passwordInputRef = useRef(null);
  const onSubmitEmail = () => {
    if (passwordInputRef.current) {
      // useEffect(() => {
      passwordInputRef.current.focus();
      // }, []);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>REACT NATIVE FINAL PROJECT</Text>
        <Text style={styles.logoDetailText}>Hồ Quốc Huy (1612253)</Text>
      </View>
      <View style={styles.form}>
        <Form
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType={'next'}
          onSubmitEditing={onSubmitEmail}
        />
        <Form
          ref={passwordInputRef}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
          returnKeyType={'done'}
        />
        <Button title="Login" onPress={handleLoginPress} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    resizeMode: 'contain',
  },
  logoText: {
    color: 'skyblue',
    fontSize: 20,
    opacity: 0.5,
    marginTop: 10,
    fontWeight: 'bold',
  },
  logoDetailText: {
    color: 'steelblue',
    fontWeight: '500',
    opacity: 0.5,
    marginTop: 10,
    fontFamily: 'Cochin',
  },
  logo: {
    width: 120,
    height: 120,
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});
export default Login;
