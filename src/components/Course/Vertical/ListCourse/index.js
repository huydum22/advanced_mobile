import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Colors, Size} from '../../../../styles';
import data from '../../../../ExampleData/course';
import Item from '../CourseItem';
import separator from '../../../Separator';
import {CourseDetailScreenName} from '../../../../config/ScreenName';
const ListCourse = (props) => {
  const {navigation, route} = props;
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        image
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Item onPressItem={onPressItem} item={item} />}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
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
});
export default ListCourse;
