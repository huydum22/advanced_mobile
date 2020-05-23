import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  CourseDetailScreenNavigator,
  AppTab,
  AuthenticateTab,
} from '../config/ScreenName';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import CourseDetailNavigator from './AppNavigator/CourseDetailNavigator';
import CourseDetail from '../scenes/CourseDetail';

const RootStack = createStackNavigator();

const RootScreen = () => (
  <RootStack.Navigator
    headerMode="none"
    mode="modal"
    initialRouteName={AuthenticateTab}>
    <RootStack.Screen name={AppTab} component={AppNavigator} />
    <RootStack.Screen name={AuthenticateTab} component={AuthNavigator} />
    <RootStack.Screen
      name={CourseDetailScreenNavigator}
      component={CourseDetailNavigator}
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
