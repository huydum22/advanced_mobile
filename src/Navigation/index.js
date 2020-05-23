import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  CourseDetailScreenName,
  HomeScreenName,
  LoginScreenName,
} from '../config/ScreenName';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import CourseDetail from '../scenes/CourseDetail';

const RootStack = createStackNavigator();

const RootScreen = () => (
  <RootStack.Navigator
    headerMode="none"
    mode="modal"
    initialRouteName={LoginScreenName}>
    <RootStack.Screen name={HomeScreenName} component={AppNavigator} />
    <RootStack.Screen name={LoginScreenName} component={AuthNavigator} />
    <RootStack.Screen
      name={CourseDetailScreenName}
      component={CourseDetail}
      options={{animationEnabled: true}}
    />
  </RootStack.Navigator>
);
const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default Navigation;
