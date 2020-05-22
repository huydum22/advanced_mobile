import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '../../config/ScreenName';
import Login from '../../scenes/Login';
import Register from '../../scenes/Register';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={LoginScreen} headerMode={'none'}>
    <Stack.Screen name={LoginScreen} component={Login} />
    <Stack.Screen name={RegisterScreen} component={Register} />
  </Stack.Navigator>
);
export default AuthNavigator;
