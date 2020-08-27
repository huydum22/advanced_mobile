import React, {
  useContext,
  useState,
  useMemo,
  useReducer,
  useEffect,
} from 'react';
import {
  SectionList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {Styles, Typography, BoxModel, Size, Distance} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SearchResultScreenName} from '../../Constants/ScreenName';
import SearchBar from '../../components/SearchBar';
import {AuthenticationContext} from '../../Provider/Authentication';
import {LocalizeContext} from '../../Provider/Localize';
import {getSearchHistory, deleteItemSearch} from '../../Actions/Search';
import {recentSearchReducer} from '../../Reducers/Search';
const initialState = {
  isLoading: true,
  listItemSearch: [],
};
const Search = (props) => {
  const {navigation, route} = props;
  const [recentSearchData, dispatch] = useReducer(
    recentSearchReducer,
    initialState,
  );
  console.disableYellowBox = true;

  const {theme} = useContext(ThemeContext);
  // const [keyword, setKeyword] = useState([]);
  const [searchText, setSearchText] = useState('');
  const {state} = useContext(AuthenticationContext);
  const {localize} = useContext(LocalizeContext);
  const {searchHear, searchRecent} = localize;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      getSearchHistory(dispatch)(state.token);
    });

    return unsubscribe;
  }, [navigation, state.token]);

  const updateSearch = (text) => {
    setSearchText(text);
  };
  const onClearText = () => {
    setSearchText('');
  };
  const onPressItem = (item) => {
    navigation.navigate(SearchResultScreenName, {
      keyword: item.content,
    });
  };
  const onPressDeleteSearch = async (item) => {
    deleteItemSearch(dispatch)(item.id, state.token);
  };

  const renderListItem = (item) => {
    if (item) {
      return (
        <View style={[Styles.fillRowBetween]}>
          <TouchableOpacity
            onPress={() => onPressItem(item)}
            underlayColor={theme.backgroundColor}
            style={styles.titleContainer}>
            <View style={[styles.itemContainer]}>
              <Ionicons name="ios-search" size={20} color={theme.grayColor} />
              <Text
                style={[
                  BoxModel.smallPaddingHorizontal,
                  {color: theme.primaryTextColor},
                ]}>
                {item.content}
              </Text>
            </View>
          </TouchableOpacity>
          <MaterialIcons.Button
            name="cancel"
            backgroundColor={theme.backgroundColor}
            color={theme.grayColor}
            underlayColor={theme.overlayColor}
            size={20}
            onPress={() => onPressDeleteSearch(item)}
          />
        </View>
      );
    }
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
      </View>
    );
  };
  const flatListSeparator = () => {
    return (
      <View style={[styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };

  const SearchBarHeader = useMemo(() => {
    const onSubmitEditing = () => {
      navigation.navigate(SearchResultScreenName, {
        keyword: searchText,
      });
    };
    return (
      <SearchBar
        searchHear={searchHear}
        searchText={searchText}
        updateSearch={updateSearch}
        onSubmitEditing={onSubmitEditing}
        onClearText={onClearText}
        autoFocus={true}
      />
    );
  }, [searchText, navigation, searchHear]);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      {SearchBarHeader}
      <SectionList
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}
        sections={[
          {title: searchRecent, data: recentSearchData.listItemSearch},
        ]}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({section: {title}}) => renderHeader(title)}
        renderItem={({item}) => renderListItem(item)}
        ItemSeparatorComponent={flatListSeparator}
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
  titleContainer: {
    flex: 1,
  },
});
export default Search;
