import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as screenName from '../../Constants/ScreenName';
import {Colors, Typography} from '../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeNavigator from './HomeNavigator';
import BrowseNavigator from './BrowseNavigator';
import MyCoursesNavigator from './MyCoursesNavigator';
import SearchNavigator from './SearchNavigator';
import {ThemeContext} from '../../Provider/Theme';
import {BookmarkProvider} from '../../Provider/Bookmark';
import {MyChannelProvider} from '../../Provider/MyChannel';
import {MyPathProvider} from '../../Provider/MyPath';
const Tab = createBottomTabNavigator();

const searchIcon = ({color}) => (
  <FontAwesome name="search" size={22} color={color} />
);
const browseIcon = ({color}) => (
  <FontAwesome name="star-o" size={22} color={color} />
);
const homeIcon = ({color}) => (
  <MaterialIcons name="home" size={22} color={color} />
);
const MyCourseIcon = ({color}) => (
  <FontAwesome5 name="tasks" size={22} color={color} />
);
function getTabBarVisible(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'home';

  if (routeName === 'courseDetail') {
    return false;
  }
  return true;
}
const configHomeTab = ({route}) => ({
  tabBarVisible: getTabBarVisible(route),
  tabBarLabel: 'Home',
  tabBarIcon: homeIcon,
});

const configBrowseTab = ({route}) => ({
  tabBarLabel: 'Favorite',
  tabBarIcon: browseIcon,
  tabBarVisible: getTabBarVisible(route),
});
const configMyCourseTab = ({route}) => ({
  tabBarLabel: 'My Course',
  tabBarIcon: MyCourseIcon,
  tabBarVisible: getTabBarVisible(route),
});
const configSearchTab = ({route}) => ({
  tabBarLabel: 'Search',
  tabBarIcon: searchIcon,
  tabBarVisible: getTabBarVisible(route),
});
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
              name={screenName.MyCourseScreenName}
              component={MyCoursesNavigator}
              options={configMyCourseTab}
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
