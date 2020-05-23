import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Styles,
  Distance,
  Size,
  Colors,
  BoxModel,
  Typography,
} from '../../../styles';
import logo from '../../../assets/image/logo.png';
const header = (props) => {
  const {name, numberOfCourse, totalHour} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>{name}</Text>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subtitleText}>{numberOfCourse}</Text>
            <Text style={styles.subtitleText}>{totalHour}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.descriptionText}>
        React is a Javascript library, developed in 2013 by Jordan Walke of
        Facebook. You'll find React is both very popular (it's the 5th most
        starred JS library on GitHub) and used on major sites including on
        Facebook, Netflix, and Khan Academy. You'll love the flexibility of
        using React with your favorite web technologies (except for jQuery!),
        and this path will take you from the fundamentals all the way up to
        building full apps with custom styling. What you will learn
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    ...Styles.fillColumnStart,
  },
  container: {
    ...BoxModel.mediumMarginVertical,
    ...BoxModel.smallMarginHorizontal,
    ...Styles.fillRowStart,
    backgroundColor: Colors.whiteColor,
  },
  image: {
    width: Size.scaleSize(50),
    height: Size.scaleSize(50),
    resizeMode: 'contain',
  },
  titleContainer: {
    ...Styles.fillColumnStart,
    ...BoxModel.marginHorizontal,
  },
  subTitleContainer: {
    ...Styles.fillRowStart,
  },
  textTitle: {
    flex: 1,
    ...Typography.fontBold,
    fontSize: Typography.fontSize16,
  },
  subtitleText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize12,
    color: Colors.grayDarkColor,
    marginRight: Distance.spacing_10,
  },
  descriptionText: {
    ...BoxModel.smallPaddingHorizontal,
    ...BoxModel.bottomMargin,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
    color: Colors.blackColor,
  },
});
export default header;
