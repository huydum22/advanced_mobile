import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import * as screenName from '../config/ScreenName';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import CourseDetailNavigator from './AppNavigator/CourseDetailNavigator';

const RootStack = createStackNavigator();

const RootScreen = () => (
  <RootStack.Navigator
    headerMode="none"
    mode="modal"
    initialRouteName={screenName.AuthenticateTab}>
    <RootStack.Screen name={screenName.AppTab} component={AppNavigator} />
    <RootStack.Screen
      name={screenName.AuthenticateTab}
      component={AuthNavigator}
    />
    <RootStack.Screen
      name={screenName.CourseDetailScreenNavigator}
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
