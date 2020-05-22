import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreenName, BrowseScreenName} from '../../config/ScreenName';

import {Colors, Typography} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './HomeNavigator';
import BrowseStack from './BrowseNavigator';

const Tab = createBottomTabNavigator();

const browseIcon = ({color}) => (
  <MaterialCommunityIcons
    name="folder-search-outline"
    size={30}
    color={color}
  />
);
const homeIcon = ({color}) => (
  <MaterialCommunityIcons name="home" size={30} color={color} />
);
const configHomeTab = {
  tabBarLabel: 'Home',
  tabBarIcon: homeIcon,
};

const configBrowseTab = {
  tabBarLabel: 'Browse',
  tabBarIcon: browseIcon,
};
const configLabel = {
  ...Typography.fontRegular,
  fontSize: Typography.fontSize14,
};
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: configLabel,
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: Colors.grayMediumColor,
    }}>
    <Tab.Screen
      name={HomeScreenName}
      component={HomeStack}
      options={configHomeTab}
    />
    <Tab.Screen
      name={BrowseScreenName}
      component={BrowseStack}
      options={configBrowseTab}
    />
  </Tab.Navigator>
);
export default AppNavigator;
