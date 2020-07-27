import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Typography} from '../../../styles';
import * as screenName from '../../../Constants/ScreenName';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as scenes from '../../../scenes';
import {ThemeContext} from '../../../Provider/Theme';
const MyCourseStack = createStackNavigator();

const MyCourseNavigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <MyCourseStack.Navigator
      screenOptions={{
        title: 'My Courses',
        headerStyle: {
          backgroundColor: theme.themeColor,
        },
        headerTintColor: theme.primaryTextColor,
        headerTitleStyle: {
          ...Typography.fontBold,
          fontSize: Typography.fontSize20,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Ionicons
            name="chevron-back-outline"
            size={36}
            color={theme.primaryColor}
          />
        ),
      }}>
      <MyCourseStack.Screen
        name={screenName.MyCourseScreenName}
        component={scenes.MyCourses}
      />
      <MyCourseStack.Screen
        name={screenName.CourseDetailScreenName}
        component={scenes.CourseDetail}
        options={{headerShown: false}}
      />
    </MyCourseStack.Navigator>
  );
};
export default MyCourseNavigator;
