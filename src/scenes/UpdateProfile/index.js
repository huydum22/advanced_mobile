import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {FormInput, PrimaryButton} from '../../components/Authentication';

import {
  Styles,
  Colors,
  Typography,
  Platform,
  Size,
  BoxModel,
} from '../../styles';
import {useAsyncStorage} from '@react-native-community/async-storage';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-picker';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
const UpdateProfile = (props) => {
  const {theme} = useContext(ThemeContext);
  const {state, updateProfileProvider} = useContext(AuthenticationContext);
  const [activeBtn, setActiveBtn] = useState(false);
  const [name, setName] = useState(state.userInfo.name);
  const [phoneNumber, setPhoneNumber] = useState(state.userInfo.phone);
  const [avatar, setAvatar] = useState(state.userInfo.avatar);
  //   const [showPass, setShowPass] = useState(false);
  const {getItem, setItem} = useAsyncStorage('@userToken');
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

  const onPressAvatar = async () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.uri) {
        setAvatar(response.uri);
      }
    });
  };
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
      {/* <TouchableHighlight
        style={[
          Styles.center,
          BoxModel.bottomMargin,
          {
            width: Size.WIDTH,
            height: Size.scaleSize(150),
          },
        ]}
        underlayColor={theme.primaryBackgroundColor}
        onPress={onPressAvatar}>
        <FastImage
          style={{
            width: Size.scaleSize(150),
            height: Size.scaleSize(150),
            borderRadius: Size.scaleSize(75),
          }}
          source={{
            uri: avatar,
          }}
        />
      </TouchableHighlight> */}
      <FormInput
        placeholder="Name"
        value={name}
        onChangeText={onChangeName}
        autoCorrect={false}
        returnKeyType={'next'}
      />
      <FormInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        autoCorrect={false}
        returnKeyType={'done'}
      />

      <PrimaryButton
        title="Update Profile"
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
