import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Styles, Typography, BoxModel, Distance} from '../../../styles';
import data from '../../../ExampleData/author';
import Item from '../AuthorItem';
const TopAuthor = (props) => {
  const renderListData = (list) => {
    return list.map((item) => (
      <Item name={item.name} image={item.image} key={item.id} />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>Top Authors</Text>
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
    ...BoxModel.smallMargin,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
  footer: {
    width: Distance.spacing_14,
  },
});

export default TopAuthor;
