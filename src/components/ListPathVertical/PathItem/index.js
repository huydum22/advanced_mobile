import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Colors, Styles, Size, Distance, BoxModel} from '../../../styles';
import {PathDetailScreenName} from '../../../config/ScreenName';
const Item = (props) => {
  const {navigation, route, image, name, numberOfCourse, totalHour} = props;
  const onPress01 = () => {
    navigation.navigate(PathDetailScreenName, {
      name: name,
      numberOfCourse: numberOfCourse,
      totalHour: totalHour,
    });
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
            <View style={styles.levelContainer}>
              <Text style={Styles.subTitleInHorizontalList}>
                {numberOfCourse}
              </Text>
              <Text style={Styles.subTitleInHorizontalList}>{totalHour}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.fillRowStart,
    backgroundColor: Colors.whiteColor,
  },
  main: {
    ...Styles.fillRowStart,
  },
  imageContainer: {
    flex: 2,
    ...Styles.center,
    height: Size.scaleSize(90),
    marginLeft: Distance.spacing_8,
  },
  image: {
    resizeMode: 'cover',
    width: Size.scaleSize(70),
    height: Size.scaleSize(50),
  },

  mainContainer: {
    ...Styles.fillColumnStart,
    flex: 8,
    ...BoxModel.smallMargin,
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
    ...Styles.fillRowStart,
    marginTop: Distance.spacing_10,
  },
});
export default Item;
