import React, {useContext} from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors, Styles, Size, BoxModel, Typography} from '../../../styles';
import skill01 from '../../../assets/image/skill01.png';
import skill02 from '../../../assets/image/skill02.png';
import skill03 from '../../../assets/image/skill03.png';
import skill04 from '../../../assets/image/skill04.png';
import skill05 from '../../../assets/image/skill05.png';
import skill06 from '../../../assets/image/skill06.png';
import skill07 from '../../../assets/image/skill07.png';
import skill08 from '../../../assets/image/skill08.png';
import {ThemeContext} from '../../../Provider/Theme';

const Item = (props) => {
  const {theme} = useContext(ThemeContext);
  const {onPress, item} = props;
  const imageBackground = () => {
    let id = Math.floor(Math.random() * 8);
    if (id === 0) {
      return skill01;
    }
    if (id === 1) {
      return skill02;
    }
    if (id === 2) {
      return skill03;
    }
    if (id === 3) {
      return skill04;
    }
    if (id === 4) {
      return skill05;
    }
    if (id === 5) {
      return skill06;
    }
    if (id === 6) {
      return skill07;
    }
    if (id === 7) {
      return skill08;
    }

  };

  return (
    <ImageBackground style={styles.container} source={imageBackground()}>
      <TouchableOpacity
        style={[
          {backgroundColor: theme.blackWith05OpacityColor},
          styles.container,
        ]}
        onPress={() => {
          onPress(item);
        }}>
        <Text
          style={[Styles.textInBanner, styles.text, {color: theme.whiteColor}]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...BoxModel.tinyMargin,
    width: Size.scaleSize(150),
    height: Size.itemHeight,
  },
  blurContainer: {},
  text: {
    ...BoxModel.smallPadding,
    ...Typography.fontBold,
  },
});
export default Item;
