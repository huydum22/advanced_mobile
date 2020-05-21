import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import mainStyle from '../../../../styles/styles';
import data from '../../../../ExampleData/author';
import Item from '../AuthorItem/author';
const TopAuthor = (props) => {
  const renderListData = (list) => {
    return list.map((item) => (
      <Item name={item.name} image={item.image} key={item.id} />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={mainStyle.titleInList}>Top Authors</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderListData(data)}
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    height: 40,
    marginLeft: 15,
    justifyContent: 'center',
  },
  footer: {
    width: 15,
  },
});

export default TopAuthor;
