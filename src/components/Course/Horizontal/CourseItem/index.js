import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {Styles, BoxModel, Size, Typography, Distance} from '../../../../styles';
import FastImage from 'react-native-fast-image';
import {ThemeContext} from '../../../../Provider/Theme';
import StarRating from 'react-native-star-rating';
import Moment from 'moment';
import p from 'pretty-format';
const numberWithCommas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
const Item = (props) => {
  const {item, onPress} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={[
        Styles.horizontalCourse,
        {
          backgroundColor: theme.DialogColor,
          ...Size.boxShadow(theme.primaryTextColor),
        },
      ]}
      underlayColor={theme.DialogColor}
      onPress={() => {
        onPress(item);
      }}>
      <View style={Styles.fillColumn}>
        <FastImage
          style={{width: Size.scaleSize(200), height: Size.scaleSize(100)}}
          source={{
            uri: item.imageUrl,
          }}
        />
        <View style={Styles.containerInHorizontalCourse}>
          <View style={Styles.breakContentText}>
            <Text
              style={[
                Styles.titleInHorizontalList,
                styles.nameTitle,
                {color: theme.primaryTextColor},
              ]}>
              {item.title}
            </Text>
          </View>
          <View style={[Styles.breakContentText, BoxModel.tinyPaddingVertical]}>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item['instructor.user.name'] || item.instructorName || item.name}
            </Text>
          </View>
          <View style={[Styles.fillRow]}>
            <Text style={Styles.subTitleInHorizontalList}>
              {Moment(item.createdAt).format('MMMM Do')}
            </Text>
            <Text style={Styles.subTitleInHorizontalList}>
              {item.totalHours}h
            </Text>
          </View>
          <View style={[Styles.fillRow, BoxModel.tinyPaddingVertical]}>
            <View style={[Styles.fillRowStart, styles.rating]}>
              <StarRating
                disabled={false}
                maxStars={5}
                starSize={Size.ratingSize}
                rating={
                  (item.presentationPoint +
                    item.formalityPoint +
                    item.contentPoint) /
                  3
                }
                fullStarColor={'#f1c40f'}
              />
            </View>
            <View style={styles.ratingText}>
              <Text style={[styles.subRating, {color: theme.grayColor}]}>
                ({item.ratedNumber})
              </Text>
            </View>
            <View style={[Styles.center, styles.rating]}>
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  {color: theme.grayColor},
                ]}>
                {item.soldNumber} students
              </Text>
            </View>
          </View>
          <View style={Styles.fillRowCenter}>
            {item.price === 0 ? (
              <Text style={[styles.price, {color: theme.primaryColor}]}>
                Free
              </Text>
            ) : (
              <Text style={[styles.price, {color: theme.primaryColor}]}>
                {numberWithCommas(item.price)} VND
              </Text>
            )}
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
  rating: {flex: 1},
  ratingText: {
    flex: 1,
    alignItems: 'flex-end',
    ...Typography.fontRegular,
    paddingRight: 2,
  },

  price: {
    flex: 1,
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  subRating: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize12,
  },
});
export default Item;
