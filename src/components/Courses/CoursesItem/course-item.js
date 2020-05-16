import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import colors from '../../../config/color';
import {Rating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = (props) => {
  const onPress01 = () => {
    console.log('test');
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.main}
        onPress={onPress01}
        underlayColor={colors.backgroundItem}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <Image source={props.image} style={styles.image} />
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.author}>{props.author}</Text>
            <View style={styles.levelContainer}>
              <Text style={styles.author}>{props.level}</Text>
              <Text style={[styles.author, styles.textCenter]}>
                {props.timeToStart}
              </Text>
              <Text style={[styles.author, styles.textCenter]}>
                {props.totalHour}
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Rating
                readonly={true}
                imageSize={14}
                startingValue={props.rate}
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.backgroundItem,
  },
  main: {
    flex: 9,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 3,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  image: {
    resizeMode: 'cover',
    width: 80,
    height: 60,
  },

  mainContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 10,
    marginLeft: 5,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontWeight: '500',
    textDecorationStyle: 'solid',
  },
  author: {
    flex: 1,
    fontWeight: '500',
    color: colors.subTextColor,
    fontSize: 12,
  },
  levelContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  more: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginRight: 5,
    // backgroundColor: colors.mainColor
  },
  textCenter: {
    textAlign: 'center',
  },
});
export default Item;
