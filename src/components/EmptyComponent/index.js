import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  Styles,
  Colors,
  Size,
  BoxModel,
  Distance,
  Typography,
} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
const Empty = (props) => {
  const {theme} = useContext(ThemeContext);
  const {title, icon, message} = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            Styles.titleRow,
            Typography.fontBold,
            {color: theme.primaryTextColor},
          ]}>
          {title}
        </Text>
      </View>
      <TouchableHighlight
        underlayColor={theme.themeColor}
        style={[
          styles.contentContainer,
          Size.boxShadow(theme.primaryTextColor),
        ]}>
        <View
          style={[
            styles.contentContainer,
            {backgroundColor: theme.themeColor},
          ]}>
          <Feather name={icon} size={50} color={theme.primaryTextColor} />
          <Text style={[styles.text, {color: theme.grayDarkColor}]}>
            {message}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...BoxModel.marginHorizontal,
  },
  titleContainer: {
    ...Styles.rowCross,
    ...BoxModel.tinyMarginVertical,
    height: Distance.medium,
  },
  contentContainer: {
    ...Styles.columnCenter,
    ...BoxModel.tinyBorderRadius,
    height: Size.scaleSize(140),
  },
  text: {
    ...BoxModel.mediumMarginHorizontal,
    ...Typography.fontRegular,
    ...Typography.textCenter,
  },
});
export default Empty;
