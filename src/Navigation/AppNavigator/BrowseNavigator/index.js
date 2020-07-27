import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Typography} from '../../../styles';
import * as screenName from '../../../Constants/ScreenName';
import * as scenes from '../../../scenes';
import {ThemeContext} from '../../../Provider/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BrowseStack = createStackNavigator();

const BrowseNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <BrowseStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.themeColor,
        },
        headerTintColor: theme.primaryTextColor,
        headerTitleStyle: {
          ...Typography.fontBold,
          fontSize: Typography.fontSize20,
        },
        headerBackTitle: '',
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Ionicons
            name="chevron-back-outline"
            size={36}
            color={theme.primaryColor}
          />
        ),
      }}
      headerMode="screen">
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
      <BrowseStack.Screen
        name={screenName.CourseDetailScreenName}
        component={scenes.CourseDetail}
        options={{headerShown: false}}
      />
    </BrowseStack.Navigator>
  );
};
export default BrowseNavigatorStack;
