import React, {useContext, useState, useEffect, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {Typography, Size, Styles} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import p from 'pretty-format';
import {CourseVerticalItem} from '../../components/Course';
import * as screenName from '../../Constants/ScreenName';
import {SEARCHV2} from '../../Constants/API';
import {API} from '../../services';
import SearchResultComponent from '../../components/SearchResult';
import {SearchBar} from 'react-native-elements';
import {AuthenticationContext} from '../../Provider/Authentication';
import {SearchContext} from '../../Provider/Search';
import {LocalizeContext} from '../../Provider/Localize';
const SearchNavigator = (props) => {
  const {navigation, route} = props;
  const {searchData, setSearchData} = useContext(SearchContext);
  const [keyword, setKeyword] = useState(route.params.keyword);
  const [searchText, setSearchText] = useState(route.params.keyword);
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const insets = useSafeArea();
  const {localize} = useContext(LocalizeContext);
  const {searchHear} = localize;
  useEffect(() => {
    const fetchDataByKeyword = async () => {
      try {
        let response = await API.post(SEARCHV2, {
          token: state.token,
          keyword: keyword,
          opt: {category: null},
          limit: 12,
          offset: 0,
        });
        if (response.isSuccess) {
          setSearchData(response.data.payload);
        }
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchDataByKeyword();
  }, [keyword, state, setSearchData]);

  const onSubmitEditing = () => {
    setKeyword(searchText);
  };
  const updateSearch = (text) => {
    setSearchText(text);
  };
  const onClearText = () => {
    setSearchText('');
  };
  const SearchBarHeader = useMemo(() => {
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
        onSubmitEditing={onSubmitEditing}
        onClear={onClearText}
        inputStyle={{color: theme.primaryTextColor}}
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, insets, theme]);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      {SearchBarHeader}
      {searchData ? <SearchResultComponent /> : undefined}
    </View>
  );
};
const styles = StyleSheet.create({
  searchBarContainer: {
    height: Size.scaleSize(40),
  },
  container: {
    flex: 1,
  },
});
export default SearchNavigator;
