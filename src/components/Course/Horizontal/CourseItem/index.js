import React from 'react';
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import {Colors, Styles, BoxModel, Size, Typography} from '../../../../styles';
import {Rating} from 'react-native-ratings';
const Item = (props) => {
  const {item, onPress} = props;
  return (
    <TouchableHighlight
      style={Styles.horizontalCourse}
      underlayColor={Colors.whiteColor}
      onPress={() => {
        onPress(item);
      }}>
      <View style={Styles.fillColumn}>
        <Image source={item.image} style={Styles.imageInHorizontalCourse} />
        <View style={Styles.containerInHorizontalCourse}>
          <View style={Styles.breakContentText}>
            <Text style={[Styles.titleInHorizontalList, styles.nameTitle]}>
              {item.name}
            </Text>
          </View>
          <View style={Styles.breakContentText}>
            <Text style={Styles.subTitleInHorizontalList}>{item.author}</Text>
          </View>
          <View style={Styles.fillRow}>
            <Text style={Styles.subTitleInHorizontalList}>{item.level}</Text>
            <Text style={Styles.subTitleInHorizontalList}>
              {item.timeToStart}
            </Text>
            <Text style={Styles.subTitleInHorizontalList}>
              {item.totalHour}
            </Text>
          </View>
          <View style={Styles.fillRow}>
            <Rating
              readonly={true}
              imageSize={Size.ratingSize}
              startingValue={item.rate}
              ratingCount={5}
            />
            <Text style={styles.ratingText}>({item.totalRate})</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  nameTitle: {
    flexWrap: 'wrap',
  },
  rating: {},
  ratingText: {
    ...Typography.fontRegular,
    ...BoxModel.smallMarginHorizontal,
    color: Colors.grayDarkColor,
    fontSize: Typography.fontSize12,
  },
});
export default Item;
