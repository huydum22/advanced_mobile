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
import {ThemeContext} from '../../../Provider/Theme';

const Item = (props) => {
  const {theme} = useContext(ThemeContext);
  const {onPress, item} = props;
  const imageBackground = (id) => {
    if (parseInt(id, 10) % 3 === 0) {
      return skill01;
    }
    if (parseInt(id, 10) % 3 === 1) {
      return skill02;
    }
    if (parseInt(id, 10) % 3 === 2) {
      return skill03;
    }
  };

  return (
    <ImageBackground style={styles.container} source={imageBackground(item.id)}>
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
    height: Size.bannerHeight,
  },
  blurContainer: {},
  text: {
    ...BoxModel.smallPadding,
    ...Typography.fontBold,
  },
});
export default Item;
