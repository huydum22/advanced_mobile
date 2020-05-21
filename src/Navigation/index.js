import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthenNavigator';
const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
