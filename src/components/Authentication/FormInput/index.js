import React, {useContext} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Size, Styles, BoxModel, Typography, Colors} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
const FormTextInput = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={Colors.primaryColor}
        style={[styles.input, props.style, {color: Colors.grayColor}]}
        placeholderTextColor={Colors.grayMediumColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    ...Styles.width100,
    ...BoxModel.smallMarginHorizontal,
    ...Typography.fontRegular,
    height: Size.scaleSize(40),
    fontSize: Typography.fontSize16,
  },
  container: {
    ...BoxModel.smallBorderRadius,
    ...BoxModel.marginHorizontal,
    ...BoxModel.smallMarginVertical,
    height: Size.scaleSize(45),
    backgroundColor: Colors.backgroundSeeAllButton,
  },
});
export default FormTextInput;
