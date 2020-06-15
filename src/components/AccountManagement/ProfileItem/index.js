import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Colors, Styles, BoxModel, Typography, Distance} from '../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from '../../../Provider/Theme';

const Item = ({icon, name, onPress}) => {
  const {theme} = useContext(ThemeContext);
  const isLogout = (icon) => {
    if (icon) {
      return (
        <FontAwesome
          name="angle-right"
          size={26}
          color={theme.primaryTextColor}
        />
      );
    }
  };
  return (
    <TouchableHighlight
      style={[
        styles.container,
        {backgroundColor: theme.primaryBackgroundColor},
      ]}
      underlayColor={theme.primaryBackgroundColor}
      onPress={onPress}>
      <View style={{flex: 1}}>
        <View
          style={[styles.separator, {backgroundColor: theme.DialogColor}]}
        />
        <View
          style={[
            styles.itemContainer,
            {backgroundColor: theme.primaryBackgroundColor},
          ]}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={theme.primaryTextColor}
          />
          <Text
            style={[
              icon
                ? [styles.itemText, {color: theme.primaryTextColor}]
                : [styles.logoutText, {color: theme.primaryColor}],
              icon ? styles.marginItemText : styles.noneMarginItemText,
            ]}>
            {name}
          </Text>
          {isLogout(icon)}
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.rowCenter,
  },
  separator: {
    height: 1,
  },
  itemContainer: {
    ...Styles.rowCenter,
    ...BoxModel.padding,
  },
  itemText: {
    flex: 1,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
  logoutText: {
    flex: 1,
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
