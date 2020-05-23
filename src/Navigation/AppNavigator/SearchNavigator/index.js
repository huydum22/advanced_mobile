import React, {useState} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../../scenes/Search';
import {
  SearchScreenName,
  PathDetailScreenName,
  AuthorDetailScreenName,
} from '../../../config/ScreenName';
import {Colors, Typography, Size, BoxModel, Distance} from '../../../styles';
import {SearchBar} from 'react-native-elements';
import PathDetail from '../../../scenes/PathDetail';
import AuthorDetail from '../../../scenes/AuthorDetail';

const SearchStack = createStackNavigator();
const SearchNavigatorStack = () => {
  const [searchText, setSearchText] = useState('');
  const updateSearch = (text) => {
    setSearchText(text);
  };

  const HeaderSearch = ({scene, previous, navigation}) => {
    const insets = useSafeArea();

    return (
      <SearchBar
        placeholder="Search here..."
        // onChangeText={updateSearch}
        value={searchText}
        lightTheme={true}
        containerStyle={{
          width: Size.WIDTH,
          backgroundColor: Colors.primaryColor,
        }}
        inputContainerStyle={{
          height: 35,
          marginTop: insets.top + 20,
          backgroundColor: Colors.whiteColor,
        }}
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
  };
  const configSearchNavigator = {
    header: () => <HeaderSearch />,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.whiteColor,
    headerTitleStyle: {
      ...Typography.fontBold,
      fontSize: Typography.fontSize20,
    },
  };
  const configNavigator = {
    title: 'Path',
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
      initialRouteName={SearchScreenName}
      headerMode="screen">
      <SearchStack.Screen
        name={SearchScreenName}
        component={Search}
        options={configSearchNavigator}
      />
      <SearchStack.Screen
        name={PathDetailScreenName}
        component={PathDetail}
        options={configNavigator}
      />
      <SearchStack.Screen
        name={AuthorDetailScreenName}
        component={AuthorDetail}
        options={configNavigator}
      />
    </SearchStack.Navigator>
  );
};
export default SearchNavigatorStack;
