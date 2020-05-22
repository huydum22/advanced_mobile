import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../scenes/Home';
import {HomeScreenName} from '../../../config/ScreenName';
import {Colors, Typography} from '../../../styles';

const HomeStack = createStackNavigator();
const configHomeNavigator = {
  title: 'Home',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const HomeNavigatorStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HomeScreenName}
        component={Home}
        options={configHomeNavigator}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigatorStack;
