import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import colors from '../../../styles/color';

const Item = (props) => {
  const onPress01 = () => {};
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
            <View style={styles.levelContainer}>
              <Text style={styles.author}>{props.numberOfCourse}</Text>
              <Text style={styles.author}>{props.totalHour}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
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
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 2,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  image: {
    resizeMode: 'cover',
    width: 70,
    height: 50,
  },

  mainContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 5,
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
});
export default Item;
