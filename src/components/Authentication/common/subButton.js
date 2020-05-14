import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../../config/color';
// import LinearGradient from 'react-native-linear-gradient';
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
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: colors.mainColor,
  },
  text: {
    color: colors.mainColor,
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default Button;
