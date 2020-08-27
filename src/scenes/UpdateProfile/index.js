import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {FormInput, PrimaryButton} from '../../components/Authentication';

import {Styles, Platform} from '../../styles';
import {useAsyncStorage} from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import {LocalizeContext} from '../../Provider/Localize';
const UpdateProfile = (props) => {
  const {theme} = useContext(ThemeContext);
  const {state, updateProfileProvider} = useContext(AuthenticationContext);
  const [activeBtn, setActiveBtn] = useState(false);
  const [name, setName] = useState(state.userInfo.name);
  const [phoneNumber, setPhoneNumber] = useState(state.userInfo.phone);
  const [avatar, setAvatar] = useState(state.userInfo.avatar);
  const {localize} = useContext(LocalizeContext);
  console.disableYellowBox = true;
  useEffect(() => {
    if (name !== '' && phoneNumber !== '') {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [name, phoneNumber]);
  const onChangeName = (newName) => {
    setName(newName);
  };
  const onChangePhoneNumber = (phone) => {
    setPhoneNumber(phone);
  };

  // const onPressAvatar = async () => {
  //   const options = {
  //     noData: true,
  //   };
  //   ImagePicker.launchImageLibrary(options, async (response) => {
  //     if (response.uri) {
  //       setAvatar(response.uri);
  //     }
  //   });
  // };
  const handleUpdateProfile = async () => {
    // token,
    // name,
    // phone,
    // avatar,
    const res = await updateProfileProvider(
      state.token,
      name,
      phoneNumber,
      avatar,
    );
    console.log(res);
    return res;
    // try {
    //   let res = await updateProfileAPI(state.token, name, avatar, phoneNumber);
    //   Alert.alert(res.data.message);
    // } catch ({res}) {
    //   console.log(res);
    //   Alert.alert(res.data.message);
    // }
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
        placeholder={localize.name}
        value={name}
        onChangeText={onChangeName}
        autoCorrect={false}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder={localize.phoneNumber}
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        autoCorrect={false}
        returnKeyType={'done'}
      />

      <PrimaryButton
        title={localize.profileUpdate}
        onPress={handleUpdateProfile}
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
export default UpdateProfile;
