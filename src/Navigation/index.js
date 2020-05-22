import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CourseDetailScreenName, HomeScreenName} from '../config/ScreenName';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import CourseDetail from '../scenes/CourseDetail';

const RootStack = createStackNavigator();

const RootScreen = () => (
  <RootStack.Navigator headerMode="none" mode="modal">
    <RootStack.Screen name={HomeScreenName} component={AppNavigator} />
    <RootStack.Screen
      name={CourseDetailScreenName}
      component={CourseDetail}
      options={{animationEnabled: true}}
    />
  </RootStack.Navigator>
);
const Navigation = () => {
  return (
    <NavigationContainer>
      <RootScreen />
    </NavigationContainer>
  );
};
export default Navigation;
