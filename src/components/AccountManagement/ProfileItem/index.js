import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Colors} from '../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const isLogout = (icon) => {
  if (icon) {
    return (
      <FontAwesome name="angle-right" size={26} color={Colors.blackColor} />
    );
  }
};
const onPress = () => {};
const Item = ({icon, name}) => {
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
    flexDirection: 'row',
    backgroundColor: Colors.whiteColor,
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: Colors.whiteColor,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: Colors.blackColor,
  },
  logoutText: {
    flex: 1,
    color: Colors.redColor,
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
