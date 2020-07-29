import React, {useContext, useState, useEffect, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {Typography, Size, Styles} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import p from 'pretty-format';
import {CourseVerticalItem} from '../../components/Course';
import * as screenName from '../../Constants/ScreenName';
import {SEARCH} from '../../Constants/API';
import {API} from '../../services';

import {SearchBar} from 'react-native-elements';

const SearchNavigator = (props) => {
  const {navigation, route} = props;
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState(route.params.keyword);
  const [searchText, setSearchText] = useState(route.params.keyword);
  const {theme} = useContext(ThemeContext);
  const insets = useSafeArea();

  useEffect(() => {
    const fetchDataByKeyword = async () => {
      try {
        let response = await API.post(SEARCH, {
          keyword: keyword,
          opt: {category: null},
          limit: 12,
          offset: 0,
        });
        if (response.isSuccess) {
          setData(response.data.payload.rows);
        }
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchDataByKeyword();
  }, [keyword]);
  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };
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
        placeholder="Search here..."
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
  const flatListSeparator = () => {
    return (
      <View style={[Styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      {SearchBarHeader}
      <FlatList
        data={data}
        image
        ItemSeparatorComponent={flatListSeparator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CourseVerticalItem
            onPressItem={() => onPressItem(item)}
            item={item}
          />
        )}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
          index,
        })}
      />
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
