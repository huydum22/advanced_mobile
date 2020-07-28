import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SearchAllScreenName,
  SearchCourseScreenName,
  SearchAuthorScreenName,
  SearchPathScreenName,
} from '../../config/ScreenName';

import searchAll from '../../components/Search';
import {ListCourseVertical} from '../../components/ListCourseVertical';
import {Colors, Typography, Size} from '../../styles';
const Tab = createMaterialTopTabNavigator();
const LessonCourseNavigator = (props) => {
  return (
    <Tab.Navigator
      initialRouteName={SearchAllScreenName}
      tabBarOptions={{
        activeTintColor: Colors.whiteColor,
        inactiveTintColor: Colors.grayDarkColor,
        labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize14},
        tabStyle: {
          height: Size.scaleSize(40),
          backgroundColor: Colors.primaryColor,
        },
        indicatorStyle: {
          backgroundColor: Colors.whiteColor,
        },
      }}
      animationEnabled={true}>
      <Tab.Screen
        name={SearchAllScreenName}
        component={searchAll}
        options={{tabBarLabel: 'All'}}
      />
      <Tab.Screen
        name={SearchCourseScreenName}
        component={ListCourseVertical}
        options={{tabBarLabel: 'Course'}}
      />
    </Tab.Navigator>
  );
};
export default LessonCourseNavigator;
