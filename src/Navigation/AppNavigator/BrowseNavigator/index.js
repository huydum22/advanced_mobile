import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography} from '../../../styles';

import * as screenName from '../../../config/ScreenName';
import * as scenes from '../../../scenes';

const BrowseStack = createStackNavigator();
const configBrowseNavigator = {
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
      <BrowseStack.Screen
        name={screenName.BrowseScreenName}
        component={scenes.Browse}
        options={{title: 'Browse'}}
      />
      <BrowseStack.Screen
        name={screenName.ShowListCourseScreenName}
        component={scenes.ListOfCourse}
        initialParams={{
          title: 'Course',
        }}
        options={({route}) => ({title: route.params.title})}
      />
      <BrowseStack.Screen
        name={screenName.AuthorDetailScreenName}
        component={scenes.AuthorDetail}
        options={{title: 'Author'}}
      />
      <BrowseStack.Screen
        name={screenName.PathDetailScreenName}
        component={scenes.PathDetail}
      />
      <BrowseStack.Screen
        name={screenName.ShowListPathScreenName}
        component={scenes.ListOfPath}
        options={{title: 'Path'}}
      />
      <BrowseStack.Screen
        name={screenName.PopularSkillScreenName}
        component={scenes.PopularSkill}
        options={{title: 'Popular skill'}}
      />
      <BrowseStack.Screen
        name={screenName.RelateSkillScreenName}
        component={scenes.RelateSkill}
        options={{title: 'Skill'}}
      />
    </BrowseStack.Navigator>
  );
};
export default BrowseNavigatorStack;
