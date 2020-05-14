import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../../config/color';
import LinearGradient from 'react-native-linear-gradient';
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <LinearGradient
        colors={[colors.mainColor, colors.subColor]}
        style={styles.container}>
        <Text style={styles.text}> {props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default Button;
