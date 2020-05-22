import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, Size, Styles, BoxModel, Typography} from '../../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FormTextInput = (props) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={props.icon} color={Colors.primaryColor} size={20} />
      <TextInput
        selectionColor={Colors.primaryColor}
        style={[styles.input, props.style]}
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
    borderColor: Colors.grayMediumColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: Colors.primaryColor,
  },
  container: {
    ...Styles.rowCenter,
    ...BoxModel.paddingHorizontal,
    ...BoxModel.smallMarginVertical,
  },
});
export default FormTextInput;
