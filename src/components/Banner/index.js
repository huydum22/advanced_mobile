import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import {
  Styles,
  BoxModel,
  Size,
  Colors,
  Typography,
  Distance,
} from '../../styles';
const Banner = (props) => {
  const {backgroundImage, name, onPress} = props;

  return (
    <ImageBackground style={styles.imageBackground} source={backgroundImage}>
      <TouchableHighlight
        style={styles.blurBackground}
        onPress={() => {
          onPress(name);
        }}
        underlayColor={Colors.blackWith03OpacityColor}>
        <View style={Styles.breakContentText}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    ...Styles.center,
    ...BoxModel.margin,
    height: Size.bannerHeight,
  },
  blurBackground: {
    ...Styles.center,
    ...BoxModel.paddingHorizontal,
    backgroundColor: Colors.blackWith05OpacityColor,
    height: Size.bannerHeight,
    width: Size.WIDTH - Distance.spacing_30,
  },
  text: {
    ...Typography.fontBold,
    ...Styles.textInBanner,
    color: Colors.whiteColor,
    fontSize: Typography.fontSize30,
  },
});
export default Banner;
