import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../Constants/ScreenName';
import {Typography} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
const CourseDetailStack = createStackNavigator();
const CourseDetailNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <CourseDetailStack.Navigator
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
