import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {
  Colors,
  Styles,
  Typography,
  Size,
  Distance,
  BoxModel,
} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
// import LinearGradient from 'react-native-linear-gradient';
const Button = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={[
        styles.container,
        {
          backgroundColor: Colors.primaryBackgroundColor,
          borderColor: Colors.primaryColor,
        },
      ]}
      onPress={props.onPress}
      underlayColor={Colors.primaryBackgroundColor}>
      <Text style={[styles.text, {color: Colors.primaryColor}]}>
        {' '}
        {props.title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...Styles.width100,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(40),
    borderWidth: Distance.superSmall,
  },
  text: {
    ...Styles.crossCenter,
    ...Typography.fontBold,
    fontSize: Typography.fontSize16,
  },
});
export default Button;
