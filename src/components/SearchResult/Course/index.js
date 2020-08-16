import React, {useContext} from 'react';
import {FlatList, View, Text} from 'react-native';
import {CourseVerticalItem} from '../../Course';
import {Styles, Size, Typography, BoxModel} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {SearchContext} from '../../../Provider/Search';
import * as screenName from '../../../Constants/ScreenName';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LocalizeContext} from '../../../Provider/Localize';
const CourseResultTopTab = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  const {searchData} = useContext(SearchContext);
  const {localize} = useContext(LocalizeContext);
  const flatListSeparator = () => {
    return (
      <View style={[Styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };
  const renderItem = () => {
    if (searchData.courses.total === 0) {
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
          data={searchData.courses.data}
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
      );
    }
  };
  return (
    <View style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}>
      {searchData.courses ? renderItem() : undefined}
    </View>
  );
};
export default CourseResultTopTab;
