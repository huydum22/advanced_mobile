import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {BoxModel, Styles, Colors, Distance, Typography} from '../../../styles';
const Item = (props) => {
  const {item, onPress} = props;
  return (
    <TouchableHighlight
      style={styles.skillContainer}
      underlayColor={Colors.backgroundSeeAllButton}
      onPress={() => {
        onPress(item);
      }}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableHighlight>
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
