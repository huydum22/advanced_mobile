import React, {useContext} from 'react';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {RecentSearchContext} from '../../Provider/RecentSearch';
import {Styles, Typography, BoxModel} from '../../styles';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchResultScreenName} from '../../Constants/ScreenName';

const Search = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {keyword, setKeyword} = useContext(RecentSearchContext);
  const onPressItem = (item) => {
    navigation.navigate(SearchResultScreenName);
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
  return (
    <SectionList
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}
      sections={[{title: 'Recent searches', data: keyword}]}
      keyExtractor={(item, index) => item + index}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={({section: {title}}) => renderHeader(title)}
      renderItem={({item}) => renderListItem(item)}
      ItemSeparatorComponent={flatListSeparator}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
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
});
export default Search;
