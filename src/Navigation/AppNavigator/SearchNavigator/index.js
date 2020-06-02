import React, {useState} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../config/ScreenName';
import {Colors, Typography, Size} from '../../../styles';
import {SearchBar} from 'react-native-elements';

const SearchStack = createStackNavigator();
const SearchNavigatorStack = () => {
  const [searchText, setSearchText] = useState('');
  const updateSearch = (text) => {
    setSearchText(text);
  };
  const insets = useSafeArea();

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
            backgroundColor: Colors.primaryColor,
          }}
          inputContainerStyle={[styles.input, {marginTop: insets.top + 20}]}
          cancelButtonProps={{
            color: Colors.whiteColor,
            backgroundColor: Colors.whiteColor,
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
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.whiteColor,
    headerTitleStyle: {
      ...Typography.fontBold,
      fontSize: Typography.fontSize20,
    },
  };
  return (
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
    </SearchStack.Navigator>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 35,
    backgroundColor: Colors.whiteColor,
  },
});
export default SearchNavigatorStack;
