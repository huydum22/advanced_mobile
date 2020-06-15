import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import data from '../../../../ExampleData/path';
import {Colors, Size} from '../../../../styles';
import Item from '../PathItem';
import {PathDetailScreenName} from '../../../../config/ScreenName';
import {ThemeContext} from '../../../../Provider/Theme';

const Paths = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const onPressItem = (item) => {
    navigation.navigate(PathDetailScreenName, {
      name: item.name,
      numberOfCourse: item.numberOfCourse,
      totalHour: item.totalHour,
    });
  };
  const flatListSeparator = () => {
    return (
      <View style={[styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  return (
    <View style={{backgroundColor: theme.backgroundColor}}>
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
  separator: {
    height: 1,
  },
});
export default Paths;
