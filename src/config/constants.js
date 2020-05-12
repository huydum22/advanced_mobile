import {Platform} from 'react-native';
const constants = {
  ANDROID: Platform.OS === 'android',
  IOS: Platform.OS === 'ios',
};

export default constants;
