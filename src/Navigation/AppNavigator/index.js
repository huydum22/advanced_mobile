import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreenName,
  BrowseScreenName,
  DownloadScreenName,
  ProfileScreenName,
} from '../../config/ScreenName';

import {Colors, Typography} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeNavigator from './HomeNavigator';
import BrowseNavigator from './BrowseNavigator';
import DownloadNavigator from './DownloadNavigator';
import ProfileNavigator from './ProfileNavigator';
const Tab = createBottomTabNavigator();

const browseIcon = ({color}) => (
  <MaterialCommunityIcons
    name="folder-search-outline"
    size={25}
    color={color}
  />
);
const homeIcon = ({color}) => (
  <MaterialCommunityIcons name="home" size={25} color={color} />
);
const downloadIcon = ({color}) => (
  <Entypo name="download" size={25} color={color} />
);
const ProfileIcon = ({color}) => (
  <FontAwesome name="user" size={25} color={color} />
);
const configHomeTab = {
  tabBarLabel: 'Home',
  tabBarIcon: homeIcon,
};

const configBrowseTab = {
  tabBarLabel: 'Browse',
  tabBarIcon: browseIcon,
};
const configDownloadTab = {
  tabBarLabel: 'Downloads',
  tabBarIcon: downloadIcon,
};
const configProfileTab = {
  tabBarLabel: 'profile',
  tabBarIcon: ProfileIcon,
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
      component={HomeNavigator}
      options={configHomeTab}
    />
    <Tab.Screen
      name={DownloadScreenName}
      component={DownloadNavigator}
      options={configDownloadTab}
    />
    <Tab.Screen
      name={BrowseScreenName}
      component={BrowseNavigator}
      options={configBrowseTab}
    />
    <Tab.Screen
      name={ProfileScreenName}
      component={ProfileNavigator}
      options={configProfileTab}
    />
  </Tab.Navigator>
);
export default AppNavigator;
