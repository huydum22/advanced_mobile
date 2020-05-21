import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import Item from '../SectionCoursesItem/section-courses-item';
import SeeAllBtn from '../../../common/see-all-button';
import {Styles} from '../../../../styles';
import data from '../../../../ExampleData/course';
const SectionCourses = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={Styles.titleInList}>{props.title} </Text>
        <SeeAllBtn />
      </View>
      <FlatList
        horizontal={true}
        // showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <Item
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    height: 40,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default SectionCourses;
