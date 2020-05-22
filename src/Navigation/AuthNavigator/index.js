import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreenName, RegisterScreenName} from '../../config/ScreenName';
import Login from '../../scenes/Login';
import Register from '../../scenes/Register';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={LoginScreenName} headerMode={'none'}>
    <Stack.Screen name={LoginScreenName} component={Login} />
    <Stack.Screen name={RegisterScreenName} component={Register} />
  </Stack.Navigator>
);
export default AuthNavigator;
