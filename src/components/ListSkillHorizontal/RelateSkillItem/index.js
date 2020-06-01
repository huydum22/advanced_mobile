import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors, Styles, Size, BoxModel, Typography} from '../../../styles';
import skill01 from '../../../assets/image/skill01.jpg';
import skill02 from '../../../assets/image/skill02.jpg';
import skill03 from '../../../assets/image/skill03.jpg';

const Item = (props) => {
  const {onPress} = props;
  const imageBackground = (id) => {
    if (id === 0) {
      return skill01;
    }
    if (id === 1) {
      return skill02;
    }
    if (id === 2) {
      return skill03;
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={imageBackground(props.image)}>
      <TouchableOpacity
        style={[styles.blurContainer, styles.container]}
        onPress={onPress}>
        <Text style={[Styles.textInBanner, styles.text]}>{props.name}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...BoxModel.tinyMargin,
    width: Size.scaleSize(150),
    height: Size.bannerHeight,
  },
  blurContainer: {
    backgroundColor: Colors.blackWith05OpacityColor,
  },
  text: {
    ...BoxModel.smallPadding,
    ...Typography.fontBold,
    color: Colors.whiteColor,
  },
});
export default Item;
