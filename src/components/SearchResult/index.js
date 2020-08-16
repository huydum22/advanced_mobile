import React, {useContext} from 'react';
import {} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Typography, Size} from '../../styles';
import AllResult from './All';
import CourseResult from './Course';
import AuthorResult from './Author';
import * as screenName from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
import {LocalizeContext} from '../../Provider/Localize';
const Tab = createMaterialTopTabNavigator();

const SearchResultTopTab = (props) => {
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const {searchAll, searchCourse, searchAuthor} = localize;
  return (
    <Tab.Navigator
      initialRouteName={screenName.SearchAllScreenName}
      tabBarOptions={{
        activeTintColor: theme.primaryColor,
        inactiveTintColor: theme.grayDarkColor,
        labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize14},

        indicatorStyle: {
          backgroundColor: theme.primaryColor,
        },
        style: {backgroundColor: theme.themeColor},
      }}
      animationEnabled={true}>
      <Tab.Screen
        name={screenName.SearchAllScreenName}
        component={AllResult}
        options={{tabBarLabel: searchAll}}
      />
      <Tab.Screen
        name={screenName.SearchCourseScreenName}
        component={CourseResult}
        options={{tabBarLabel: searchCourse}}
      />
      <Tab.Screen
        name={screenName.SearchAuthorScreenName}
        component={AuthorResult}
        options={{tabBarLabel: searchAuthor}}
      />
    </Tab.Navigator>
  );
};
export default SearchResultTopTab;
