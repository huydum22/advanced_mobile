import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SearchAllScreenName,
  SearchCourseScreenName,
  SearchAuthorScreenName,
  SearchPathScreenName,
} from '../../config/ScreenName';

import SearchAll from '../../components/Search';
import {ListCourseVertical} from '../../components/ListCourseVertical';
import {ListPathVertical} from '../../components/ListPathVertical';
import {ListAuthorVertical} from '../../components/ListAuthorVertical';
import {Colors, Typography} from '../../styles';
const Tab = createMaterialTopTabNavigator();
const SearchNavigator = (props) => {
  return (
    <Tab.Navigator
      initialRouteName={SearchAllScreenName}
      tabBarOptions={{
        activeTintColor: Colors.whiteColor,
        inactiveTintColor: Colors.grayDarkColor,
        labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize14},
        tabStyle: {
          // height: Size.scaleSize(40),
          backgroundColor: Colors.primaryColor,
        },
        indicatorStyle: {
          backgroundColor: Colors.whiteColor,
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
