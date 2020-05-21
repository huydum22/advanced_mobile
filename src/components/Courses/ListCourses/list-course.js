import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import colors from '../../../styles/color';
import data from '../../../ExampleData/course';
import Item from '../CoursesItem/course-item';

const ListCourse = (props) => {
  const flatListSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        image
        ItemSeparatorComponent={flatListSeparator}
        showsVerticalScrollIndicator={false}
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
  container: {
    backgroundColor: colors.backgroundColor,
  },
  separator: {
    height: 1,
    backgroundColor: colors.backgroundColor,
  },
});
export default ListCourse;
