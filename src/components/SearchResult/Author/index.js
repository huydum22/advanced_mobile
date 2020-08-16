import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListAuthorVertical} from '../../Author';
import * as screenName from '../../../Constants/ScreenName';
import {useContext} from 'react';
import {SearchContext} from '../../../Provider/Search';
import {ThemeContext} from '../../../Provider/Theme';
import {Styles, Typography, BoxModel, Size} from '../../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthorVerticalItem} from '../../Author';
import {LocalizeContext} from '../../../Provider/Localize';
const AuthorResultTopTab = (props) => {
  const {navigation} = props;
  const {searchData} = useContext(SearchContext);
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const onPressAuthor = (item) => {
    navigation.navigate(screenName.AuthorDetailScreenName, {
      id: item.id,
    });
  };
  const flatListSeparator = () => {
    return (
      <View style={[Styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  const renderItem = () => {
    if (searchData.instructors.total === 0) {
      return (
        <View style={[Styles.columnCenter, Styles.maxHeight]}>
          <FontAwesome5 name="link" size={70} color={theme.primaryColor} />
          <Text
            style={[
              Typography.fontBold,
              BoxModel.marginVertical,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            {localize.searchErr}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize18, color: theme.grayColor},
            ]}>
            {localize.searchTry}
          </Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={searchData.instructors.data}
          ItemSeparatorComponent={flatListSeparator}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <AuthorVerticalItem
              onPressItem={() => onPressAuthor(item)}
              item={item}
            />
          )}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(90),
            offset: Size.scaleSize(90) * index,
            index,
          })}
        />
      );
    }
  };

  return (
    <View style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}>
      {searchData.instructors ? renderItem() : undefined}
    </View>
  );
};
export default AuthorResultTopTab;
