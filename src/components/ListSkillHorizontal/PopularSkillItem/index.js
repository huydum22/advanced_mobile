import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BoxModel, Styles, Colors, Distance} from '../../../styles';
const Item = (props) => {
  const {name} = props;
  return (
    <TouchableOpacity style={styles.skillContainer}>
      <Text>{name}</Text>
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
});
export default Item;
