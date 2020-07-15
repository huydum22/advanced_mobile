import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, Alert} from 'react-native';
import {FormInput, PrimaryButton} from '../../components/Authentication';

import {Styles, Colors, Typography, Platform} from '../../styles';
import {CheckBox} from 'react-native-elements';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {updatePasswordAPI} from '../../services/Authentication';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
const ChangePassword = (props) => {
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const [activeBtn, setActiveBtn] = useState(false);
  const [oldPass, setOldPass] = useState('12345678');
  const [newPass, setNewPass] = useState('123456789');
  const [showPass, setShowPass] = useState(false);
  const {getItem, setItem} = useAsyncStorage('@userToken');
  useEffect(() => {
    if (oldPass !== '' && newPass !== '') {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [newPass, oldPass]);
  const onChangePassword = (pass) => {
    setOldPass(pass);
  };
  const onChangeNewPassword = (pass) => {
    setNewPass(pass);
  };
  const onPressShowPass = () => {
    setShowPass(!showPass);
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const handleChangePassWord = async () => {
    const item = await getItem();
    if (item !== null) {
      try {
        const jsonValue = JSON.parse(item);
        let response = await updatePasswordAPI(
          state.token,
          state.userInfo.id,
          oldPass,
          newPass,
        );
        if (response.status === 200) {
          Alert.alert(response.data.message);

          let value = {email: jsonValue.email, password: newPass};
          storeData(value);
        }
      } catch ({response}) {
        console.log(response);
        Alert.alert(response.data.message);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        Styles.mainCenter,
        {backgroundColor: theme.backgroundColor},
      ]}
      behavior={Platform.Ios ? 'padding' : 'height'}>
      <FormInput
        placeholder="Old Password"
        value={oldPass}
        onChangeText={onChangePassword}
        autoCorrect={false}
        secureTextEntry={!showPass}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder="New Password"
        value={newPass}
        onChangeText={onChangeNewPassword}
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
        title="Change Password"
        onPress={handleChangePassWord}
        active={activeBtn}
      />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ChangePassword;
