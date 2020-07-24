import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {FavoriteContext} from '../../../../Provider/Favorite';
import {Size, Styles, Distance} from '../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import {ThemeContext} from '../../../../Provider/Theme';
import StarRating from 'react-native-star-rating';
import FastImage from 'react-native-fast-image';
import Moment from 'moment';
import p from 'pretty-format';
const Item = (props) => {
  const {onPressItem, item} = props;
  const {theme} = useContext(ThemeContext);
  const {favorite, setFavorite} = useContext(FavoriteContext);
  const onPressMore = (itemShow) => {
    this.ActionSheet.context = itemShow;
    this.ActionSheet.show();
  };
  console.log(p(item));
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
              {item['instructor.user.name']}
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
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.more}
          onPress={() => {
            onPressMore(item);
          }}>
          <Ionicons name="ios-more" size={25} color={theme.primaryTextColor} />
        </TouchableOpacity>
        <ActionSheet
          ref={(o) => (this.ActionSheet = o)}
          options={['Bookmark', 'Add to channel', 'Download', 'cancel']}
          cancelButtonIndex={3}
          onPress={(index) => {
            if (index === 2) {
              setFavorite((favorite) => [
                ...favorite,
                this.ActionSheet.context,
              ]);
            }
            /* do something */
          }}
        />
      </View>
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
  subContainer: {
    flex: 1,
    ...Styles.center,
  },
  levelContainer: {
    ...Styles.fillRowBetween,
    marginTop: 5,
  },
  ratingContainer: {
    flex: 1.5,
    ...Styles.fillRowStart,
    // marginTop: -Size.scaleSize(20),
  },
  more: {
    ...Styles.fillCenter,
    marginRight: 5,
  },
});
export default Item;
