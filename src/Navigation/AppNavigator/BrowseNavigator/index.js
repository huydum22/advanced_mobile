import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Typography} from '../../../styles';
import * as screenName from '../../../Constants/ScreenName';
import * as scenes from '../../../scenes';
import {ThemeContext} from '../../../Provider/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LocalizeContext} from '../../../Provider/Localize';
const BrowseStack = createStackNavigator();

const BrowseNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
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
        options={{title: localize.favoriteTitle}}
      />
      <BrowseStack.Screen
        name={screenName.ShowListCourseScreenName}
        component={scenes.ListOfCourse}
        initialParams={{
          title: localize.course,
        }}
        options={({route}) => ({title: route.params.title})}
      />
      <BrowseStack.Screen
        name={screenName.AuthorDetailScreenName}
        component={scenes.AuthorDetail}
        options={{title: localize.searchAuthor}}
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
