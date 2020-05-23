import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Colors} from '../../../styles';
import data from '../../../ExampleData/author';
import Item from '../AuthorItem';
const Authors = (props) => {
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
          />
        )}
        keyExtractor={(item) => item.id}
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
export default Authors;
