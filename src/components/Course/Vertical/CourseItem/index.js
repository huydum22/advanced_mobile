import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Size, Styles, Distance, Typography} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
import StarRating from 'react-native-star-rating';
import FastImage from 'react-native-fast-image';
import Moment from 'moment';
const numberWithCommas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
const Item = (props) => {
  const {onPressItem, item} = props;
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.primaryBackgroundColor},
      ]}>
      <TouchableHighlight
        style={styles.main}
        onPress={() => {
          onPressItem(item);
        }}
        underlayColor={theme.primaryBackgroundColor}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={{
                uri: item.imageUrl || item.courseImage,
              }}
            />
          </View>
          <View style={styles.mainContainer}>
            <Text
              style={[
                Styles.titleInHorizontalList,
                {color: theme.primaryTextColor},
              ]}>
              {item.title || item.courseTitle}
            </Text>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item['instructor.user.name'] || item.name || item.instructorName}
            </Text>
            <View style={styles.levelContainer}>
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  {color: theme.grayColor},
                ]}>
                {item.soldNumber || item.courseSoldNumber} students
              </Text>
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  Styles.textCenter,
                  {color: theme.grayColor},
                ]}>
                {Moment(item.updatedAt).format('MMMM Do')}
              </Text>
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  Styles.textCenter,
                  {color: theme.grayColor},
                ]}>
                {item.totalHours} hours
              </Text>
            </View>
            <View style={styles.ratingContainer}>
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
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  {color: theme.grayColor},
                ]}>
                ({item.ratedNumber})
              </Text>
            </View>
            {item.price === 0 || item.coursePrice === 0 ? (
              <Text style={[styles.price, {color: theme.primaryColor}]}>
                Free
              </Text>
            ) : (
              <Text style={[styles.price, {color: theme.primaryColor}]}>
                {numberWithCommas(item.price || item.coursePrice)} VND
              </Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.fillRow,
  },
  main: {
    flex: 9,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 3,
    ...Styles.center,
    height: Size.scaleSize(110),
    width: Size.scaleSize(50),
    marginLeft: Distance.spacing_8,
  },
  image: {
    resizeMode: 'cover',
    width: Size.scaleSize(80),
    height: Size.scaleSize(60),
  },

  mainContainer: {
    ...Styles.fillColumnStart,
    flex: 8,
    marginVertical: 10,
    marginLeft: 5,
  },
  levelContainer: {
    ...Styles.fillRowBetween,
    marginTop: 5,
  },
  ratingContainer: {
    flex: 1.5,
    ...Styles.fillRowStart,
  },
  more: {
    ...Styles.fillCenter,
    marginRight: 5,
  },
  price: {
    flex: 1,
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
});
export default Item;
