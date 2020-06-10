import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import Item from '../PathItem';
import SeeAllBtn from '../../common/see-all-button';
import {Styles, BoxModel, Distance, Typography, Size} from '../../../styles';
import {
  ShowListPathScreenName,
  PathDetailScreenName,
} from '../../../config/ScreenName';
const Path = (props) => {
  const {navigation, route, data} = props;
  const seeAllPath = () => {
    navigation.navigate(ShowListPathScreenName);
  };
  const onPress = (item) => {
    navigation.navigate(PathDetailScreenName, {
      name: item.name,
      numberOfCourse: item.numberOfCourse,
      totalHour: item.totalHour,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>
          {props.title}{' '}
        </Text>
        <SeeAllBtn onPress={seeAllPath} />
      </View>
      <FlatList
        data={data.slice(0, 5)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Item item={item} key={item.id} onPress={onPress} />
        )}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(200),
          offset: Size.scaleSize(200) * index,
          index,
        })}
      />
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
