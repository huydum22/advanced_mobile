import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as screenName from '../../../Constants/ScreenName';
import LessonList from '../LessonList';
import QuestionView from '../Question';
import NoteView from '../Note';
import MoreView from '../More';
import ExerciseView from '../Exercise';

import {Typography, Size} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {LocalizeContext} from '../../../Provider/Localize';
const Tab = createMaterialTopTabNavigator();
const LessonCourseNavigator = (props) => {
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  return (
    <Tab.Navigator
      initialRouteName={screenName.LectureTab}
      tabBarOptions={{
        activeTintColor: theme.primaryColor,
        inactiveTintColor: theme.grayDarkColor,
        labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize10},
        indicatorStyle: {
          backgroundColor: theme.primaryColor,
        },
        style: {backgroundColor: theme.backgroundColor},
      }}
      animationEnabled={true}>
      <Tab.Screen
        name={screenName.LectureTab}
        component={LessonList}
        options={{tabBarLabel: localize.lessonLecture}}
      />
      <Tab.Screen
        name={screenName.MoreTab}
        component={QuestionView}
        options={{tabBarLabel: 'Q&A'}}
      />
      <Tab.Screen
        name={screenName.QuestionTab}
        component={NoteView}
        options={{tabBarLabel: localize.lessonNote}}
      />
      <Tab.Screen
        name={screenName.ExerciseTab}
        component={ExerciseView}
        options={{tabBarLabel: localize.lessonExercise}}
      />
      <Tab.Screen
        name={screenName.NoteTab}
        component={MoreView}
        options={{tabBarLabel: localize.lessonMore}}
      />
    </Tab.Navigator>
  );
};
export default LessonCourseNavigator;
