import React from 'react';
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native';
import colors from '../../../config/color';

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
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{props.name}</Text>
            <Text style={styles.textSubTitle}>{props.numberOfCourse}</Text>
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
    backgroundColor: colors.whiteColor,
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
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
  },
  textContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  textTitle: {
    fontWeight: '500',
    textDecorationStyle: 'solid',
  },
  textSubTitle: {
    fontWeight: '500',
    color: colors.subTextColor,
    fontSize: 12,
  },
});
export default Item;
