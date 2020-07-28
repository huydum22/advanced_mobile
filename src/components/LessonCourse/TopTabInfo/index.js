import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as screenName from '../../../Constants/ScreenName';
import LessonList from '../LessonList';
import QuestionView from '../Question';
import NoteView from '../Note';
import MoreView from '../More';

import {Typography, Size} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
const Tab = createMaterialTopTabNavigator();
const LessonCourseNavigator = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName={screenName.LectureTab}
      tabBarOptions={{
        activeTintColor: theme.primaryColor,
        inactiveTintColor: theme.grayDarkColor,
        labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize12},
        tabStyle: {
          // height: Size.scaleSize(40),
          backgroundColor: theme.themeColor,
        },
        indicatorStyle: {
          backgroundColor: theme.primaryColor,
        },
      }}
      animationEnabled={true}>
      <Tab.Screen
        name={screenName.LectureTab}
        component={LessonList}
        options={{tabBarLabel: 'Lecture'}}
      />
      <Tab.Screen
        name={screenName.MoreTab}
        component={QuestionView}
        options={{tabBarLabel: 'Question'}}
      />
      <Tab.Screen
        name={screenName.QuestionTab}
        component={NoteView}
        options={{tabBarLabel: 'Note'}}
      />
      <Tab.Screen
        name={screenName.NoteTab}
        component={MoreView}
        options={{tabBarLabel: 'More'}}
      />
    </Tab.Navigator>
  );
};
export default LessonCourseNavigator;
