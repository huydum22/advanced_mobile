import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../../config/color';
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}> {props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAINCOLOR,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  text: {
    color: 'white',
    alignItems: 'center',
    height: 20,
    fontWeight: 'bold',
  },
});
export default Button;
