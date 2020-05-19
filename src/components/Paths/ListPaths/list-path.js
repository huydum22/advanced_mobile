import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import data from '../../../ExampleData/path';
import colors from '../../../config/color';
import Item from '../PathItem/path-item';
const Paths = (props) => {
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
            image={item.image}
            numberOfCourse={item.numberOfCourse}
            totalHour={item.totalHour}
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
export default Paths;
