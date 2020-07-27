import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../Constants/ScreenName';
import {Typography} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
const LessonCourseStack = createStackNavigator();
const LessonCourseNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <LessonCourseStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.themeColor,
        },
        headerTintColor: theme.primaryTextColor,
        headerTitleStyle: {
          ...Typography.fontBold,
          fontSize: Typography.fontSize20,
        },
      }}
      initialRouteName={screenName.LessonCourseScreenStack}>
      <LessonCourseStack.Screen
        name={screenName.LessonCourseScreenName}
        component={scenes.LessonCourse}
        options={{headerShown: false}}
        initialParams={{id: 1}}
      />
      <LessonCourseStack.Screen
        name={screenName.AuthorDetailScreenName}
        component={scenes.AuthorDetail}
        options={{title: 'Author'}}
      />
    </LessonCourseStack.Navigator>
  );
};
export default LessonCourseNavigatorStack;
