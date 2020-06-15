import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Colors, Size, Typography, Styles, BoxModel} from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../../../Provider/Theme';
const Button = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={theme.primaryColor}
      onPress={() => {
        props.onPress();
      }}>
      <LinearGradient
        colors={[theme.primaryColor, theme.subPrimaryColor]}
        style={styles.container}>
        <Text style={[styles.text, {color: theme.primaryBackgroundColor}]}>
          {' '}
          {props.title}
        </Text>
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
    fontSize: Typography.fontSize16,
  },
});
export default Button;
