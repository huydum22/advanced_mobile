import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Item from '../PathItem/path-item';
import SeeAllBtn from '../../../common/see-all-button';
import mainStyle from '../../../../config/styles';
import data from '../../../../ExampleData/course';
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
        <Text style={mainStyle.titleInList}>{props.title} </Text>
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
    height: 40,
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Path;
