import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SearchAllScreenName,
  SearchCourseScreenName,
  SearchAuthorScreenName,
  SearchPathScreenName,
} from '../../config/ScreenName';

import SearchAll from '../../components/Search';
import {ListCourseVertical} from '../../components/Course';
import {ListPathVertical} from '../../components/Path';
import {ListAuthorVertical} from '../../components/Author';
import {Typography} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
const Tab = createMaterialTopTabNavigator();
const SearchNavigator = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName={SearchAllScreenName}
      tabBarOptions={{
        activeTintColor: theme.primaryTextColor,
        inactiveTintColor: theme.grayDarkColor,
        labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize14},
        // tabStyle: {
        //   backgroundColor: theme.themeColor,
        // },
        indicatorStyle: {
          backgroundColor: theme.primaryColor,
          height: 2,
        },
        style: {
          backgroundColor: theme.themeColor,
        },
        pressOpacity: 1,
      }}
      animationEnabled={true}>
      <Tab.Screen
        name={SearchAllScreenName}
        component={SearchAll}
        options={{tabBarLabel: 'All'}}
      />
      <Tab.Screen
        name={SearchCourseScreenName}
        component={ListCourseVertical}
        options={{tabBarLabel: 'Course'}}
      />
      <Tab.Screen
        name={SearchPathScreenName}
        component={ListPathVertical}
        options={{tabBarLabel: 'Paths'}}
      />
      <Tab.Screen
        name={SearchAuthorScreenName}
        component={ListAuthorVertical}
        options={{tabBarLabel: 'Author'}}
      />
    </Tab.Navigator>
  );
};
export default SearchNavigator;
