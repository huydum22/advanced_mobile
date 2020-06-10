import React from 'react';
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
const Empty = (props) => {
  const {onPress, title, icon, message} = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>{title} </Text>
      </View>
      <TouchableHighlight
        onPress={() => {
          onPress;
        }}
        underlayColor={Colors.whiteColor}
        style={[styles.contentContainer, Size.boxShadow(Colors.blackColor)]}>
        <View style={styles.contentContainer}>
          <Feather name={icon} size={50} />
          <Text style={styles.text}>{message}</Text>
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
    backgroundColor: Colors.whiteColor,
  },
  text: {
    ...BoxModel.mediumMarginHorizontal,
    ...Typography.fontRegular,
    ...Typography.textCenter,
    color: Colors.grayDarkColor,
  },
});
export default Empty;
