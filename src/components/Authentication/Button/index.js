import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Size, Typography, Styles, BoxModel} from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <LinearGradient
        colors={[Colors.primaryColor, Colors.subPrimaryColor]}
        style={styles.container}>
        <Text style={styles.text}> {props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
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
