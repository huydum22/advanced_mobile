import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import colors from '../../../../styles/color';
import mainStyle from '../../../../styles/styles';
import {Rating} from 'react-native-ratings';
const Item = (props) => {
  return (
    <TouchableOpacity style={mainStyle.item} activeOpacity={0.6}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.title}>
        <Text style={styles.nameTitle}>{props.name}</Text>
        <Text style={styles.descriptionTitle}>{props.author}</Text>
        <View style={styles.levelContainer}>
          <Text style={styles.descriptionSubTitle}>{props.level}</Text>
          <Text style={styles.descriptionSubTitle}>{props.timeToStart}</Text>
          <Text style={styles.descriptionSubTitle}>{props.totalHour}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating
            readonly={true}
            imageSize={14}
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
  image: {
    flex: 1,
    width: 200,
    borderRadius: 5,
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
    marginTop: 5,
    justifyContent: 'flex-start',
  },
  nameTitle: {
    flex: 1,
    fontWeight: '500',
    textDecorationStyle: 'solid',
  },
  descriptionTitle: {
    flex: 1,
    fontWeight: '500',
    color: colors.subTextColor,
    fontSize: 11,
  },
  descriptionSubTitle: {
    flex: 1,
    fontWeight: '500',
    color: colors.subTextColor,
    fontSize: 11,
  },
  levelContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rating: {
    // flex:1,
  },
  ratingText: {
    fontWeight: '500',
    color: colors.subTextColor,
    fontSize: 11,
    marginLeft: 10,
  },
});
export default Item;
