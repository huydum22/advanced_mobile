import React, {useContext, useState, useMemo} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {Styles, Typography, BoxModel, Size, Distance} from '../../styles';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SearchResultScreenName} from '../../Constants/ScreenName';
import {SearchBar} from 'react-native-elements';
import {SEARCH_HISTORY, DELETE_SEARCH_HISTORY} from '../../Constants/API';
import {API} from '../../services';
import p from 'pretty-format';
import {useEffect} from 'react';
import {AuthenticationContext} from '../../Provider/Authentication';
import {LocalizeContext} from '../../Provider/Localize';
const Search = (props) => {
  const insets = useSafeArea();
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const [keyword, setKeyword] = useState([]);
  const [isDeleted, setDeleted] = useState(false);
  const [searchText, setSearchText] = useState('');
  const {state} = useContext(AuthenticationContext);
  const {localize} = useContext(LocalizeContext);
  const {searchHear, searchRecent} = localize;
  useEffect(() => {
    if (!isDeleted) {
      const fetchKeyword = async () => {
        try {
          let response = await API.get(SEARCH_HISTORY, state.token);
          if (response.isSuccess) {
            setDeleted(true);
            setKeyword(response.data.payload.data);
          } else {
            console.log(response.data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      fetchKeyword();
    }
  }, [state, isDeleted]);

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
    try {
      let response = await API.delete(
        `${DELETE_SEARCH_HISTORY}/${item.id}`,
        undefined,
        state.token,
      );
      if (response.isSuccess) {
        setDeleted(false);
        console.log(response.data);
      } else {
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderListItem = (item) => {
    if (item) {
      return (
        <View style={[Styles.fillRowBetween]}>
          <TouchableHighlight
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
          </TouchableHighlight>
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
    setDeleted(false);
    const onSubmitEditing = () => {
      navigation.navigate(SearchResultScreenName, {
        keyword: searchText,
      });
    };
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
  }, [searchText, insets, theme, navigation]);
  return (
    <View style={styles.container}>
      {SearchBarHeader}
      <SectionList
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}
        sections={[{title: searchRecent, data: keyword}]}
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
