import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Item from '../PathItem/path-item';
import SeeAllBtn from '../../../common/see-all-button';
import {Styles, BoxModel, Distance, Typography} from '../../../../styles';
import data from '../../../../ExampleData/path';
const Path = (props) => {
  const renderListData = (list) => {
    return list.map((item) => (
      <Item
        name={item.name}
        numberOfCourse={item.numberOfCourse}
        key={item.id}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>
          {props.title}{' '}
        </Text>
        <SeeAllBtn />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderListData(data)}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    ...BoxModel.smallMargin,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});
export default Path;
