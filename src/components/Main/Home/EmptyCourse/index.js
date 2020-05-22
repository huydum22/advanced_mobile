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
} from '../../../../styles';
const Empty = (props) => {
  const onPressEmptyCourse = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>
          {props.title}{' '}
        </Text>
      </View>
      <TouchableHighlight
        onPress={onPressEmptyCourse}
        underlayColor={Colors.whiteColor}
        style={[styles.contentContainer, Size.boxShadow(Colors.blackColor)]}>
        <View style={styles.contentContainer}>
          <Feather name={props.icon} size={50} />
          <Text style={styles.text}>{props.message}</Text>
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
