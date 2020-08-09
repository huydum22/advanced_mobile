import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreenName,
  RegisterScreenName,
  IntroScreenName,
  ForgotPasswordScreenName,
} from '../../Constants/ScreenName';

import {Login, Register, Introduce, ForgotPassword} from '../../scenes';
import {Typography, Colors} from '../../styles';
import forgotPassword from '../../scenes/ForgotPassword';
const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={IntroScreenName}
    headerMode="screen"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: Colors.primaryTextColor,
    }}>
    <Stack.Screen
      name={IntroScreenName}
      component={Introduce}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={LoginScreenName}
      component={Login}
      initialParams={{email: '', password: ''}}
      options={{title: 'Sign In', headerTitleStyle: {...Typography.fontBold}}}
    />
    <Stack.Screen
      name={RegisterScreenName}
      component={Register}
      options={{title: 'Sign up', headerTitleStyle: {...Typography.fontBold}}}
    />
    <Stack.Screen
      name={ForgotPasswordScreenName}
      component={ForgotPassword}
      options={{
        title: 'Forgot your Password ',
        headerTitleStyle: {...Typography.fontBold},
      }}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
