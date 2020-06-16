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
      underlayColor={Colors.primaryColor}
      onPress={() => {
        props.onPress();
      }}>
      {/* <LinearGradient
        colors={[Colors.primaryColor, Colors.subPrimaryColor]}
        style={styles.container}> */}
      <Text style={[styles.text, {color: Colors.primaryBackgroundColor}]}>
        {/* {' '} */}
        {props.title}
      </Text>
      {/* </LinearGradient> */}
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
  text: {
    ...Styles.crossCenter,
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
});
export default Button;
