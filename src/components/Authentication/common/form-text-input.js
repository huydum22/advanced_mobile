import React, {useRef, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../../../config/color';
const FormTextInput = (props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <TextInput
      ref={inputRef}
      selectionColor={colors.MAINCOLOR}
      style={[styles.input, props.style]}
      placeholderTextColor={colors.SILVER}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    color: colors.MAINCOLOR,
  },
});
export default FormTextInput;
