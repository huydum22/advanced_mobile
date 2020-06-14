import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../config/ScreenName';
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
      screenOptions={configNavigator}
      initialRouteName={screenName.CourseDetailScreenStack}>
      <CourseDetailStack.Screen
        name={screenName.CourseDetailScreenName}
        component={scenes.CourseDetail}
        options={{headerShown: false}}
        initialParams={{id: 1}}
      />
      <CourseDetailStack.Screen
        name={screenName.AuthorDetailScreenName}
        component={scenes.AuthorDetail}
        options={{title: 'Author'}}
      />
    </CourseDetailStack.Navigator>
  );
};
export default CourseDetailNavigatorStack;
