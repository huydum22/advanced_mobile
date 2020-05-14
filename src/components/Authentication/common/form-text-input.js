import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../../../config/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FormTextInput = (props) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={props.icon} color={colors.mainColor} size={20} />
      <TextInput
        selectionColor={colors.mainColor}
        style={[styles.input, props.style]}
        placeholderTextColor={colors.placeHolderColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: colors.placeHolderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    marginLeft: 20,
    paddingBottom: 10,
    color: colors.mainColor,
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    marginRight: 40,
  },
});
export default FormTextInput;
