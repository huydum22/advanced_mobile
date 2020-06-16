import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreenName,
  RegisterScreenName,
  IntroScreenName,
} from '../../config/ScreenName';
import Login from '../../scenes/Login';
import Register from '../../scenes/Register';
import Introduce from '../../scenes/IntroduceView';
import {Typography, Colors} from '../../styles';
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
      options={{title: 'Sign In', headerTitleStyle: {...Typography.fontBold}}}
    />
    <Stack.Screen
      name={RegisterScreenName}
      component={Register}
      options={{title: 'Sign up', headerTitleStyle: {...Typography.fontBold}}}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
