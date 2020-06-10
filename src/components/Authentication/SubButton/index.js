import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {
  Colors,
  Styles,
  Typography,
  Size,
  Distance,
  BoxModel,
} from '../../../styles';
// import LinearGradient from 'react-native-linear-gradient';
const Button = (props) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={props.onPress}
      underlayColor={Colors.whiteColor}>
      <Text style={styles.text}> {props.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...Styles.width100,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(40),
    backgroundColor: Colors.whiteColor,
    borderWidth: Distance.superSmall,
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
