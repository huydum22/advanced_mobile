import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../../../config/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const isLogout = (icon) => {
  if (icon) {
    return (
      <FontAwesome name="angle-right" size={26} color={colors.titleItemColor} />
    );
  }
};
const Item = ({icon, name}) => {
  return (
    <TouchableHighlight style={styles.container}>
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
    flexDirection: 'row',
    backgroundColor: colors.titleColor,
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: colors.titleColor,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: colors.titleItemColor,
  },
  logoutText: {
    flex: 1,
    color: colors.logoutText,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 17,
  },
  marginItemText: {
    marginLeft: 20,
  },
  noneMarginItemText: {
    marginLeft: 0,
  },
});
export default Item;
