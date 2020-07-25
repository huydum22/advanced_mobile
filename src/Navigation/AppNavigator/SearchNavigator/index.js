import React, {useState, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../Constants/ScreenName';
import {Typography, Size} from '../../../styles';
// import {SearchBar} from 'react-native-elements';
import {ThemeContext} from '../../../Provider/Theme';
import {RecentSearchProvider} from '../../../Provider/RecentSearch';
const SearchStack = createStackNavigator();
const SearchNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);

  const configNavigator = {
    headerStyle: {
      backgroundColor: theme.themeColor,
    },
    headerTintColor: theme.primaryTextColor,
    headerTitleStyle: {
      ...Typography.fontBold,
      fontSize: Typography.fontSize20,
    },
  };
  return (
    <RecentSearchProvider>
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
          name={screenName.PathDetailScreenName}
          component={scenes.PathDetail}
          options={{title: 'Path'}}
        />
        <SearchStack.Screen
          name={screenName.AuthorDetailScreenName}
          component={scenes.AuthorDetail}
          options={{title: 'Author'}}
        />
        <SearchStack.Screen
          name={screenName.SearchResultScreenName}
          component={scenes.SearchResult}
          options={{headerShown: false}}
        />
      </SearchStack.Navigator>
    </RecentSearchProvider>
  );
};

export default SearchNavigatorStack;
