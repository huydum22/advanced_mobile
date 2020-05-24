import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Item from '../CourseItem';
import SeeAllBtn from '../../common/see-all-button';
import {Styles, Distance, Typography, BoxModel, Size} from '../../../styles';
// import data from '../../../ExampleData/course';
import {ShowListCourseScreenName} from '../../../config/ScreenName';
const SectionCourses = (props) => {
  const {navigation, data, route, title} = props;

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
        data={data}
        renderItem={({item}) => (
          <Item
            navigation={navigation}
            route={route}
            name={item.name}
            author={item.author}
            level={item.level}
            timeToStart={item.timeToStart}
            totalHour={item.totalHour}
            totalRate={item.totalRate}
            rate={item.rate}
            image={item.image}
          />
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
