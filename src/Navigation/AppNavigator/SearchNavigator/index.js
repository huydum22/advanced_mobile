import React, {useState, useContext} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../Constants/ScreenName';
import {Typography, Size} from '../../../styles';
import {SearchBar} from 'react-native-elements';
import {ThemeContext} from '../../../Provider/Theme';
import {RecentSearchProvider} from '../../../Provider/RecentSearch';
const SearchStack = createStackNavigator();
const SearchNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  const insets = useSafeArea();
  const styles = StyleSheet.create({
    input: {
      height: 40,
      backgroundColor: theme.searchBackgroundColor,
      marginTop: insets.top + 20,
    },
  });
  const [searchText, setSearchText] = useState('');
  const updateSearch = (text) => {
    setSearchText(text);
  };

  const configSearchNavigator = {
    header: (props) => {
      return (
        <SearchBar
          placeholder="Search here..."
          onChangeText={(search) => updateSearch(search)}
          value={searchText}
          lightTheme={true}
          containerStyle={{
            width: Size.WIDTH,
            backgroundColor: theme.themeColor,
          }}
          onFocus={() => props.navigation.navigate(screenName.SearchScreenName)}
          inputContainerStyle={styles.input}
          cancelButtonProps={{
            color: theme.primaryTextColor,
            backgroundColor: theme.themeColor,
            buttonStyle: {
              marginTop: 50,
            },
          }}
          platform="ios"
          round={true}
        />
      );
    },
  };
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
          options={configSearchNavigator}
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
          options={configSearchNavigator}
        />
      </SearchStack.Navigator>
    </RecentSearchProvider>
  );
};

export default SearchNavigatorStack;
