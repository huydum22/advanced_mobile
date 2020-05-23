import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography} from '../../../styles';

import {
  BrowseScreenName,
  ShowListCourseScreenName,
  AuthorDetailScreenName,
  PathDetailScreenName,
  ShowListPathScreenName,
  PopularSkillScreenName,
} from '../../../config/ScreenName';
import AuthorDetail from '../../../scenes/AuthorDetail';
import PathDetail from '../../../scenes/PathDetail';
import Browse from '../../../scenes/Browse';
import ListOfCourse from '../../../scenes/ListOfCourse';
import ListOfPath from '../../../scenes/ListOfPath';
import PopularSkill from '../../../scenes/PopularSkill';

const BrowseStack = createStackNavigator();
const configBrowseNavigator = {
  title: 'Browse',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const BrowseNavigatorStack = () => {
  return (
    <BrowseStack.Navigator screenOptions={configBrowseNavigator}>
      <BrowseStack.Screen name={BrowseScreenName} component={Browse} />
      <BrowseStack.Screen
        name={ShowListCourseScreenName}
        component={ListOfCourse}
        initialParams={{
          title: 'Course',
        }}
        options={({route}) => ({title: route.params.title})}
      />
      <BrowseStack.Screen
        name={AuthorDetailScreenName}
        component={AuthorDetail}
      />
      <BrowseStack.Screen name={PathDetailScreenName} component={PathDetail} />
      <BrowseStack.Screen
        name={ShowListPathScreenName}
        component={ListOfPath}
      />
      <BrowseStack.Screen
        name={PopularSkillScreenName}
        component={PopularSkill}
      />
    </BrowseStack.Navigator>
  );
};
export default BrowseNavigatorStack;
