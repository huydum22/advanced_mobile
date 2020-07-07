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
    navigation.navigate(CourseDetailScreenStack, {
      screen: CourseDetailScreenName,
      params: {id: item.id},
    });
  };
  const showListCourse = () => {
    navigation.navigate(ShowListCourseScreenName, {
      title: title,
    });
  };
  return (
    <View style={[Styles.fillColumn, styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>{title} </Text>
        <SeeAllBtn onPress={showListCourse} />
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data.slice(0, 5)}
        renderItem={({item}) => <Item item={item} onPress={onPressItem} />}
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
