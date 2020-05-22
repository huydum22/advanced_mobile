import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, BrowseScreen} from '../../config/ScreenName';
import Home from '../../scenes/Home';
import Browse from '../../scenes/Browse';
import {Colors, Typography} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import home from '../../scenes/Home';
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
const configHome = {
  tabBarLabel: 'Home',
  tabBarIcon: homeIcon,
};

const configBrowse = {
  tabBarLabel: 'Browse',
  tabBarIcon: browseIcon,
};
const configLabel = {
  ...Typography.fontRegular,
  fontSize: Typography.fontSize14,
};
const configHomeStack = {
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
const configBrowseStack = {
  title: 'Browse',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HomeScreen}
        component={Home}
        options={configHomeStack}
      />
    </HomeStack.Navigator>
  );
}
const BrowseStack = createStackNavigator();

function BrowseStackScreen() {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name={BrowseScreen}
        component={Browse}
        options={configBrowseStack}
      />
    </BrowseStack.Navigator>
  );
}
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: configLabel,
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: Colors.grayMediumColor,
    }}>
    <Tab.Screen
      name={HomeScreen}
      component={HomeStackScreen}
      options={configHome}
    />
    <Tab.Screen
      name={BrowseScreen}
      component={BrowseStackScreen}
      options={configBrowse}
    />
  </Tab.Navigator>
);
export default AppNavigator;
