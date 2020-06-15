import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Size} from '../../../../styles';
import data from '../../../../ExampleData/author';
import Item from '../AuthorItem';
import {AuthorDetailScreenName} from '../../../../config/ScreenName';
import {ThemeContext} from '../../../../Provider/Theme';

const Authors = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const onPressItem = (item) => {
    navigation.navigate(AuthorDetailScreenName, {
      name: item.name,
    });
  };
  const flatListSeparator = () => {
    return (
      <View
        style={[styles.separator, {backgroundColor: theme.backgroundColor}]}
      />
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
export default Authors;
