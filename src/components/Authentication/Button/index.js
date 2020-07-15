import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Colors, Size, Typography, Styles, BoxModel} from '../../../styles';
const Button = (props) => {
  const {active} = props;
  return (
    <TouchableHighlight
      style={active ? styles.container : styles.unActiveContainer}
      underlayColor={Colors.primaryColor}
      onPress={
        active
          ? () => {
              props.onPress();
            }
          : undefined
      }>
      <Text
        style={[
          styles.text,
          active
            ? {color: Colors.primaryBackgroundColor}
            : {color: Colors.grayColor},
        ]}>
        {props.title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    ...BoxModel.marginHorizontal,
    ...BoxModel.smallMarginVertical,
    height: Size.scaleSize(45),
    backgroundColor: Colors.primaryColor,
  },
  unActiveContainer: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    ...BoxModel.marginHorizontal,
    ...BoxModel.smallMarginVertical,
    height: Size.scaleSize(45),
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    ...Styles.crossCenter,
    ...Typography.fontBold,
    fontSize: Typography.fontSize16,
  },
});
export default Button;
