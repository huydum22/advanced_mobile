import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Styles, Size, BoxModel, Typography} from '../../../styles';
import FastImage from 'react-native-fast-image';

import {categoryImage} from '../../../Constants/Image';
import {ThemeContext} from '../../../Provider/Theme';

const Item = (props) => {
  const {theme} = useContext(ThemeContext);
  const {onPress, item} = props;

  return (
    <FastImage
      style={styles.container}
      source={{
        uri: categoryImage[Math.floor(Math.random() * categoryImage.length)],
      }}>
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
    </FastImage>
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
