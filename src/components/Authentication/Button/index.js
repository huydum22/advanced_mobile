import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Colors, Size, Typography, Styles, BoxModel} from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
const Button = (props) => {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={Colors.primaryColor}
      onPress={() => {
        props.onPress();
      }}>
      <LinearGradient
        colors={[Colors.primaryColor, Colors.subPrimaryColor]}
        style={styles.container}>
        <Text style={styles.text}> {props.title}</Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...Styles.width100,
    ...BoxModel.marginVertical,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(40),
  },
  text: {
    ...Styles.crossCenter,
    ...Typography.fontBold,
    color: Colors.whiteColor,
    fontSize: Typography.fontSize16,
  },
});
export default Button;
