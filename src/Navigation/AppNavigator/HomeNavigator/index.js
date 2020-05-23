import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../scenes/Home';
import {
  HomeScreenName,
  ShowListCourseScreenName,
  SearchScreenName,
} from '../../../config/ScreenName';
import {Colors, Typography} from '../../../styles';

import ListOfCourse from '../../../scenes/ListOfCourse';
import SearchView from '../../../scenes/Search';
const HomeStack = createStackNavigator();
const configHomeNavigator = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const HomeNavigatorStack = () => {
  return (
    <HomeStack.Navigator screenOptions={configHomeNavigator}>
      <HomeStack.Screen
        name={HomeScreenName}
        component={Home}
        options={{title: 'Home'}}
      />
      <HomeStack.Screen
        name={ShowListCourseScreenName}
        component={ListOfCourse}
        initialParams={{
          title: 'Course',
        }}
        options={({route}) => ({title: route.params.title})}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigatorStack;
