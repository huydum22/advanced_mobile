import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import data from '../../../ExampleData/path';
import {Colors} from '../../../styles';
import Item from '../PathItem';
const Paths = (props) => {
  const {navigation, route} = props;
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
            navigation={navigation}
            route={route}
            name={item.name}
            image={item.image}
            numberOfCourse={item.numberOfCourse}
            totalHour={item.totalHour}
          />
        )}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
export default Paths;
