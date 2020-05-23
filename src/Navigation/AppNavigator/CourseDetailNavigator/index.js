import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CourseDetail from '../../../scenes/CourseDetail';
import AuthorDetail from '../../../scenes/AuthorDetail';
import {
  CourseDetailScreenName,
  AuthorDetailScreenName,
} from '../../../config/ScreenName';
import {Colors, Typography} from '../../../styles';
const CourseDetailStack = createStackNavigator();
const configNavigator = {
  headerShown: true,
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const CourseDetailNavigatorStack = () => {
  return (
    <CourseDetailStack.Navigator
      headerMode="screen"
      screenOptions={configNavigator}>
      <CourseDetailStack.Screen
        name={CourseDetailScreenName}
        component={CourseDetail}
        options={{headerShown: false}}
      />
      <CourseDetailStack.Screen
        name={AuthorDetailScreenName}
        component={AuthorDetail}
        options={{title: 'Author'}}
      />
    </CourseDetailStack.Navigator>
  );
};
export default CourseDetailNavigatorStack;
