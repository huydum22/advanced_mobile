import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import data from '../../../../ExampleData/path';
import {Colors, Size} from '../../../../styles';
import Item from '../PathItem';
import {PathDetailScreenName} from '../../../../config/ScreenName';

const Paths = (props) => {
  const {navigation, route} = props;
  const onPressItem = (item) => {
    navigation.navigate(PathDetailScreenName, {
      name: item.name,
      numberOfCourse: item.numberOfCourse,
      totalHour: item.totalHour,
    });
  };
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
        renderItem={({item}) => <Item onPressItem={onPressItem} item={item} />}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(90),
          offset: Size.scaleSize(90) * index,
          index,
        })}
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
