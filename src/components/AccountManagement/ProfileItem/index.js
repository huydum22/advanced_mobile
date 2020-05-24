import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Colors, Styles, BoxModel, Typography, Distance} from '../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const isLogout = (icon) => {
  if (icon) {
    return (
      <FontAwesome name="angle-right" size={26} color={Colors.blackColor} />
    );
  }
};
const Item = ({icon, name, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={Colors.whiteColor}
      onPress={onPress}>
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
        <Text
          style={[
            icon ? styles.itemText : styles.logoutText,
            icon ? styles.marginItemText : styles.noneMarginItemText,
          ]}>
          {name}
        </Text>
        {isLogout(icon)}
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.rowCenter,
    backgroundColor: Colors.whiteColor,
  },
  itemContainer: {
    backgroundColor: Colors.whiteColor,
    ...Styles.rowCenter,
    ...BoxModel.padding,
  },
  itemText: {
    flex: 1,
    color: Colors.blackColor,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
  logoutText: {
    flex: 1,
    color: Colors.redColor,
    textAlign: 'center',
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  marginItemText: {
    marginLeft: Distance.spacing_20,
  },
  noneMarginItemText: {
    marginLeft: 0,
  },
});
export default Item;
