import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Colors, Size, Styles, Distance, Typography} from '../../../styles';
import {Rating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CourseDetailScreenName} from '../../../config/ScreenName';
const Item = (props) => {
  const {
    navigation,
    route,
    image,
    name,
    author,
    level,
    timeToStart,
    totalHour,
    rate,
  } = props;
  const onPress01 = () => {
    navigation.navigate(CourseDetailScreenName);
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.main}
        onPress={onPress01}
        underlayColor={Colors.whiteColor}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.mainContainer}>
            <Text style={Styles.titleInHorizontalList}>{name}</Text>
            <Text style={Styles.subTitleInHorizontalList}>{author}</Text>
            <View style={styles.levelContainer}>
              <Text style={Styles.subTitleInHorizontalList}>{level}</Text>
              <Text
                style={[Styles.subTitleInHorizontalList, Styles.textCenter]}>
                {timeToStart}
              </Text>
              <Text
                style={[Styles.subTitleInHorizontalList, Styles.textCenter]}>
                {totalHour}
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Rating
                readonly={true}
                imageSize={14}
                startingValue={rate}
                ratingCount={5}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.more}>
          <Ionicons name="ios-more" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.fillRow,
    backgroundColor: Colors.backgroundItem,
  },
  main: {
    flex: 9,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 3,
    ...Styles.center,
    height: Size.scaleSize(100),
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
    marginTop: 10,
  },
  more: {
    ...Styles.fillCenter,
    marginRight: 5,
  },
});
export default Item;
