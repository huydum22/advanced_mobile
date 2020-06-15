import React, {useContext} from 'react';
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
import {ThemeContext} from '../../Provider/Theme';
const Banner = (props) => {
  const {backgroundImage, name, onPress} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <ImageBackground style={styles.imageBackground} source={backgroundImage}>
      <TouchableHighlight
        style={[
          styles.blurBackground,
          {backgroundColor: theme.blackWith05OpacityColor},
        ]}
        onPress={() => {
          onPress(name);
        }}
        underlayColor={theme.blackWith03OpacityColor}>
        <View style={Styles.breakContentText}>
          <Text style={[styles.text, {color: theme.whiteColor}]}>{name}</Text>
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
    width: Size.bannerWidth,
  },
  blurBackground: {
    ...Styles.center,
    height: Size.bannerHeight,
    width: Size.WIDTH - Distance.spacing_30,
  },
  text: {
    ...Typography.fontBold,
    ...Styles.textInBanner,
    fontSize: Typography.fontSize30,
  },
});
export default Banner;
