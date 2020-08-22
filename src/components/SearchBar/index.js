import React, {useContext} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import {SearchBar} from 'react-native-elements';

const SearchBarComponent = ({
  searchHear,
  searchText,
  updateSearch,
  onSubmitEditing,
  onClearText,
  autoFocus,
}) => {
  const {theme} = useContext(ThemeContext);
  const insets = useSafeArea();

  return (
    <SearchBar
      placeholder={searchHear}
      onChangeText={(search) => updateSearch(search)}
      value={searchText}
      lightTheme={true}
      containerStyle={{
        width: Size.WIDTH,
        backgroundColor: theme.themeColor,
      }}
      inputStyle={{color: theme.primaryTextColor}}
      autoFocus={autoFocus}
      onSubmitEditing={onSubmitEditing}
      onClear={onClearText}
      inputContainerStyle={{
        height: Size.scaleSize(40),
        backgroundColor: theme.searchBackgroundColor,
        marginTop: insets.top + 20,
      }}
      cancelButtonProps={{
        color: theme.primaryTextColor,
        backgroundColor: theme.themeColor,
        buttonStyle: {
          marginTop: insets.top + 20,
        },
      }}
      platform="ios"
      round={true}
    />
  );
};
export default SearchBarComponent;
