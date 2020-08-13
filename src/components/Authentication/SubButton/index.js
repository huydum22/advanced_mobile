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
  const {title, onPress} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={[
        styles.container,
        {
          backgroundColor: Colors.primaryColor,
          borderColor: Colors.primaryColor,
        },
      ]}
      onPress={onPress}
      underlayColor={Colors.primaryBackgroundColor}
      {...props}>
      <Text style={[styles.text, {color: Colors.primaryColor}]}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
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
