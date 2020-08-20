import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Styles, Typography, BoxModel, Distance, Size} from '../../../../styles';
import Item from '../AuthorItem';
import {AuthorDetailScreenName} from '../../../../Constants/ScreenName';
import {ThemeContext} from '../../../../Provider/Theme';

const TopAuthor = (props) => {
  const {onPress, data} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            Styles.titleRow,
            Typography.fontBold,
            {color: theme.primaryTextColor},
          ]}>
          Top Authors
        </Text>
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
