import React, {useState} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../../scenes/Search';
import {SearchScreenName} from '../../../config/ScreenName';
import {Colors, Typography, Size, BoxModel, Distance} from '../../../styles';
import {SearchBar} from 'react-native-elements';
import {color} from 'react-native-reanimated';
const SearchStack = createStackNavigator();
const SearchNavigatorStack = () => {
  const [searchText, setSearchText] = useState('');
  const updateSearch = (text) => {
    setSearchText(text);
  };
  const HeaderSearch = () => {
    const insets = useSafeArea();

    return (
      <SearchBar
        placeholder="Search here..."
        onChangeText={updateSearch}
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
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={SearchScreenName}
        component={Search}
        options={configSearchNavigator}
      />
    </SearchStack.Navigator>
  );
};
export default SearchNavigatorStack;
