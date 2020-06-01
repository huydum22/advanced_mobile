import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Styles, Typography, BoxModel, Distance} from '../../../styles';
import Item from '../AuthorItem';
const TopAuthor = (props) => {
  const {navigation, route, data} = props;
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
          <Item
            name={item.name}
            image={item.image}
            key={item.id}
            navigation={navigation}
            route={route}
          />
        )}
        ListFooterComponent={() => {
          return <View style={styles.footer} />;
        }}
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
