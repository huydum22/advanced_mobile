import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BoxModel, Styles, Colors, Distance, Typography} from '../../../styles';
const Item = (props) => {
  const {name, onPress} = props;
  return (
    <TouchableOpacity style={styles.skillContainer} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  skillContainer: {
    ...BoxModel.smallBorderRadius,
    ...Styles.mainCenter,
    ...BoxModel.smallPaddingHorizontal,
    backgroundColor: Colors.backgroundSeeAllButton,
    marginLeft: Distance.spacing_10,
    height: Distance.spacing_30,
  },
  text: {
    ...Typography.fontRegular,
    color: Colors.blackColor,
  },
});
export default Item;
