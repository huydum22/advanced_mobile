import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from '../../config/color';
const SeeAllButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>See all ></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 80,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.backgroundButtonColor,
    backgroundColor: colors.backgroundButtonColor,
  },
  text: {
    color: colors.blackTitleColor,
    fontSize: 13,
    fontWeight: '300',
  },
});
export default SeeAllButton;
