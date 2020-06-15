import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as screenName from '../../config/ScreenName';

import {Colors, Typography} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeNavigator from './HomeNavigator';
import BrowseNavigator from './BrowseNavigator';
import DownloadNavigator from './DownloadNavigator';
import SearchNavigator from './SearchNavigator';
import {ThemeContext} from '../../Provider/Theme';
import {BookmarkProvider} from '../../Provider/Bookmark';
import {MyChannelProvider} from '../../Provider/MyChannel';
import {MyPathProvider} from '../../Provider/MyPath';
const Tab = createBottomTabNavigator();

const searchIcon = ({color}) => (
  <FontAwesome name="search" size={25} color={color} />
);
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
  <MaterialIcons name="favorite-border" size={25} color={color} />
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
  tabBarLabel: 'Favorite',
  tabBarIcon: downloadIcon,
};
const configSearchTab = {
  tabBarLabel: 'Search',
  tabBarIcon: searchIcon,
};
const configLabel = {
  ...Typography.fontRegular,
  fontSize: Typography.fontSize14,
};
const AppNavigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <BookmarkProvider>
      <MyChannelProvider>
        <MyPathProvider>
          <Tab.Navigator
            initialRouteName={screenName.HomeScreenName}
            tabBarOptions={{
              labelStyle: configLabel,
              activeTintColor: theme.primaryColor,
              inactiveTintColor: theme.grayMediumColor,
              style: {
                backgroundColor: theme.themeColor,
                elevation: 0,
                shadowOpacity: 0,
                borderTopWidth: 0,
              },
            }}>
            <Tab.Screen
              name={screenName.HomeScreenName}
              component={HomeNavigator}
              options={configHomeTab}
            />
            <Tab.Screen
              name={screenName.DownloadScreenName}
              component={DownloadNavigator}
              options={configDownloadTab}
            />
            <Tab.Screen
              name={screenName.BrowseScreenName}
              component={BrowseNavigator}
              options={configBrowseTab}
            />
            <Tab.Screen
              name={screenName.SearchScreenName}
              component={SearchNavigator}
              options={configSearchTab}
            />
          </Tab.Navigator>
        </MyPathProvider>
      </MyChannelProvider>
    </BookmarkProvider>
  );
};
export default AppNavigator;
