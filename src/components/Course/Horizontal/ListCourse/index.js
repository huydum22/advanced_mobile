import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Item from '../CourseItem';
import SeeAllBtn from '../../../common/see-all-button';
import {Styles, Distance, Typography, BoxModel, Size} from '../../../../styles';
import {
  ShowListCourseScreenName,
  CourseDetailScreenName,
  CourseDetailScreenStack,
} from '../../../../Constants/ScreenName';
const SectionCourses = (props) => {
  const {navigation, data, route, title} = props;
  const onPressItem = (item) => {
    navigation.push(CourseDetailScreenStack, {
      screen: CourseDetailScreenName,
      params: {id: item.id},
    });
  };

  return (
    <View style={[Styles.fillColumn, styles.container]}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data ? data : []}
        renderItem={({item}) => (
          <Item item={item} onPress={() => onPressItem(item)} />
        )}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(200),
          offset: Size.scaleSize(200) * index,
          index,
        })}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});
export default SectionCourses;
