import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Colors, Styles, BoxModel, Size, Typography} from '../../../styles';
import {Rating} from 'react-native-ratings';
const Item = (props) => {
  return (
    <TouchableOpacity
      style={Styles.horizontalCourse}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <Image source={props.image} style={Styles.imageInHorizontalCourse} />
      <View style={Styles.containerInHorizontalCourse}>
        <View style={Styles.breakContentText}>
          <Text style={[Styles.titleInHorizontalList, styles.nameTitle]}>
            {props.name}
          </Text>
        </View>
        <View style={Styles.breakContentText}>
          <Text style={Styles.subTitleInHorizontalList}>{props.author}</Text>
        </View>
        <View style={Styles.fillRow}>
          <Text style={Styles.subTitleInHorizontalList}>{props.level}</Text>
          <Text style={Styles.subTitleInHorizontalList}>
            {props.timeToStart}
          </Text>
          <Text style={Styles.subTitleInHorizontalList}>{props.totalHour}</Text>
        </View>
        <View style={Styles.fillRow}>
          <Rating
            readonly={true}
            imageSize={Size.ratingSize}
            startingValue={props.rate}
            ratingCount={5}
          />
          <Text style={styles.ratingText}>({props.totalRate})</Text>
        </View>
      </View>
    </TouchableOpacity>
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
