import React, {useContext, useState, useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import Spinner from 'react-native-loading-spinner-overlay';
import SearchResultComponent from '../../components/SearchResult';
import SearchBar from '../../components/SearchBar';

import {AuthenticationContext} from '../../Provider/Authentication';
import {SearchContext} from '../../Provider/Search';
import {LocalizeContext} from '../../Provider/Localize';
const SearchNavigator = (props) => {
  const {navigation, route} = props;
  const {searchResultData, searchResultProvider, page, setPage} = useContext(
    SearchContext,
  );
  console.disableYellowBox = true;

  const [keyword, setKeyword] = useState(route.params.keyword);
  const [searchText, setSearchText] = useState(route.params.keyword);
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const insets = useSafeArea();
  const {localize} = useContext(LocalizeContext);
  const {searchHear} = localize;
  useEffect(() => {
    searchResultProvider(state.token, keyword, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, state, page]);
  const onSubmitEditing = () => {
    setKeyword(searchText);
    setPage(0);
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
        searchHear={searchHear}
        searchText={searchText}
        updateSearch={updateSearch}
        onSubmitEditing={onSubmitEditing}
        onClearText={onClearText}
        autoFocus={false}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, insets, theme]);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Spinner
        visible={searchResultData.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
      />
      {SearchBarHeader}
      <SearchResultComponent />
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
