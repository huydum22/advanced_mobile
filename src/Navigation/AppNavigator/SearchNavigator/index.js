import React, {useState, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../Constants/ScreenName';
import {Typography, Size} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {SearchProvider} from '../../../Provider/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LocalizeContext} from '../../../Provider/Localize';

const SearchStack = createStackNavigator();
const SearchNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const configNavigator = {
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
  };
  return (
    <SearchProvider>
      <SearchStack.Navigator
        initialRouteName={screenName.SearchScreenName}
        headerMode="screen"
        screenOptions={configNavigator}>
        <SearchStack.Screen
          name={screenName.SearchScreenName}
          component={scenes.Search}
          options={{headerShown: false}}
        />
        <SearchStack.Screen
          name={screenName.AuthorDetailScreenName}
          component={scenes.AuthorDetail}
          options={{title: localize.searchAuthor}}
        />
        <SearchStack.Screen
          name={screenName.SearchResultScreenName}
          component={scenes.SearchResult}
          options={{headerShown: false}}
        />
        <SearchStack.Screen
          name={screenName.CourseDetailScreenName}
          component={scenes.CourseDetail}
          options={{headerShown: false}}
        />
      </SearchStack.Navigator>
    </SearchProvider>
  );
};

export default SearchNavigatorStack;
