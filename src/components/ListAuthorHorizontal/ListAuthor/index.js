import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Styles, Typography, BoxModel, Distance, Size} from '../../../styles';
import Item from '../AuthorItem';
import {AuthorDetailScreenName} from '../../../config/ScreenName';

const TopAuthor = (props) => {
  const {navigation, route, data} = props;
  const onPress = (item) => {
    navigation.navigate(AuthorDetailScreenName, {
      name: item.name,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>Top Authors</Text>
      </View>
      <FlatList
        data={data.slice(0, 5)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Item item={item} key={item.id} onPress={onPress} />
        )}
        ListFooterComponent={() => {
          return <View style={styles.footer} />;
        }}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(160),
          offset: Size.scaleSize(160) * index,
          index,
        })}
      />
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
