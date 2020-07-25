import React, {useContext, useState, useMemo} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {RecentSearchContext} from '../../Provider/RecentSearch';
import {Styles, Typography, BoxModel, Size, Distance} from '../../styles';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchResultScreenName} from '../../Constants/ScreenName';
import {SearchBar} from 'react-native-elements';

import p from 'pretty-format';

const Search = (props) => {
  const insets = useSafeArea();

  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {keyword, setKeyword} = useContext(RecentSearchContext);
  const [searchText, setSearchText] = useState('');

  const updateSearch = (text) => {
    setSearchText(text);
  };
  const onClearText = () => {
    setSearchText('');
  };
  const onPressItem = (item) => {
    navigation.navigate(SearchResultScreenName, {
      keyword: item,
    });
  };

  const renderListItem = (item) => {
    return (
      <TouchableHighlight
        onPress={() => onPressItem(item)}
        underlayColor={theme.backgroundColor}>
        <View style={styles.itemContainer}>
          <Ionicons name="ios-search" size={20} color={theme.grayColor} />
          <Text
            style={[
              BoxModel.smallPaddingHorizontal,
              {color: theme.primaryTextColor},
            ]}>
            {item}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };
  const renderHeader = (title) => {
    return (
      <View
        style={[
          styles.headerContainer,
          {backgroundColor: theme.backgroundColor},
        ]}>
        <Text
          style={[
            Styles.titleRow,
            Typography.fontBold,
            {color: theme.primaryTextColor},
          ]}>
          {title}
        </Text>
        <TouchableHighlight>
          <Text
            style={[
              Typography.fontBold,
              {color: theme.primaryColor, fontSize: Typography.fontSize14},
            ]}>
            Clear
          </Text>
        </TouchableHighlight>
      </View>
    );
  };
  const flatListSeparator = () => {
    return (
      <View style={[styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  const onSubmitEditing = () => {
    navigation.navigate(SearchResultScreenName, {
      keyword: searchText,
    });
  };
  const SearchBarHeader = useMemo(() => {
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
        inputStyle={{color: theme.primaryTextColor}}
        autoFocus={true}
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
  }, [searchText, insets, theme]);
  return (
    <View style={styles.container}>
      {SearchBarHeader}
      <SectionList
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}
        sections={[{title: 'Recent searches', data: keyword}]}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({section: {title}}) => renderHeader(title)}
        renderItem={({item}) => renderListItem(item)}
        ItemSeparatorComponent={flatListSeparator}
        // ListHeaderComponent={searchBar}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: Distance.small,
    ...BoxModel.marginHorizontal,
    ...Styles.rowBetween,
  },
  itemContainer: {
    ...BoxModel.marginHorizontal,
    ...BoxModel.smallPaddingVertical,
    ...Styles.fillRowCenter,
  },
  separator: {
    height: 1,
    ...BoxModel.marginHorizontal,
  },
  searchBarContainer: {
    height: Size.scaleSize(40),
  },
});
export default Search;
