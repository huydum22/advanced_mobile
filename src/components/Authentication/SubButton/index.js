import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  Colors,
  Styles,
  Typography,
  Size,
  Spacing,
  BoxModel,
} from '../../../styles';
// import LinearGradient from 'react-native-linear-gradient';
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}> {props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...Styles.width100,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(40),
    backgroundColor: Colors.whiteColor,
    borderWidth: Spacing.superSmall,
    borderColor: Colors.primaryColor,
  },
  text: {
    ...Styles.crossCenter,
    ...Typography.fontBold,
    color: Colors.primaryColor,
    fontSize: Typography.fontSize16,
  },
});
export default Button;
