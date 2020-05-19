import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import colors from '../../../../../config/color';
import skill01 from '../../../../../../assets/skill01.jpg';
import skill02 from '../../../../../../assets/skill02.jpg';
import skill03 from '../../../../../../assets/skill03.jpg';

const Item = (props) => {
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
      <TouchableOpacity style={styles.blurContainer}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  blurContainer: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.alphaBackgroundImageColor,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    color: colors.whiteColor,
    padding: 10,
    fontWeight: 'bold',
  },
});
export default Item;
