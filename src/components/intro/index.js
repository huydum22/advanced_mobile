import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {Colors, Typography, BoxModel, Size} from '../../styles';
import FastImage from 'react-native-fast-image';

import intro01 from '../../assets/image/intro01.jpg';
import intro02 from '../../assets/image/intro02.jpg';
import intro03 from '../../assets/image/intro03.jpg';

const Intro = (props) => {
  return (
    <Swiper>
      <View style={styles.slide1}>
        <FastImage style={styles.image} source={intro01} />
        <Text style={[styles.text, {color: Colors.primaryTextColor}]}>
          Take world's best courses online from top universities and industry
          partners.
        </Text>
      </View>
      <View style={styles.slide2}>
        <FastImage style={styles.image} source={intro02} />
        <Text style={[styles.text, {color: Colors.primaryTextColor}]}>
          Access content anywhere, anytime you can even save content for offline
          usage
        </Text>
      </View>
      <View style={styles.slide3}>
        <FastImage style={styles.image} source={intro03} />
        <Text style={[styles.text, {color: Colors.primaryTextColor}]}>
          Earn employer-recognized credentials and take your career to the next
          level
        </Text>
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...BoxModel.marginHorizontal,
  },
  slide2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...BoxModel.marginHorizontal,
  },
  slide3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...BoxModel.marginHorizontal,
  },
  text: {
    ...Typography.fontBold,
    ...BoxModel.marginVertical,
    fontSize: Typography.fontSize20,
  },
  image: {
    width: Size.WIDTH - Size.scaleSize(30),
    height: Size.HEIGHT - Size.scaleSize(450),
  },
});
export default Intro;
