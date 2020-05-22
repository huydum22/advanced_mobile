import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {
  Colors,
  Styles,
  Typography,
  Size,
  BoxModel,
  Distance,
} from '../../styles';
const SeeAllButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={[styles.text, Typography.fontRegular]}>See all ></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    height: Size.scaleSize(20),
    width: Size.scaleSize(80),
    ...BoxModel.smallBorderRadius,
    marginRight: Distance.normal,
    borderWidth: Distance.superSmall,
    borderColor: Colors.backgroundSeeAllButton,
    backgroundColor: Colors.backgroundSeeAllButton,
  },
  text: {
    color: Colors.blackWith08OpacityColor,
    fontSize: Typography.fontSize14,
  },
});
export default SeeAllButton;
