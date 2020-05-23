import React from 'react';
import {View, StyleSheet, Text, Alert, TouchableHighlight} from 'react-native';
import {Styles, Colors, Typography, Size, BoxModel} from '../../styles';
import Entypo from 'react-native-vector-icons/Entypo';
const description = 'You have access to the following limited subscriptions:';
const expireTime = 'Free account (Limited Library) (expires May 14, 2021)';
const titleButton = 'Click Upgrade to subscribe to our full library';

const subscription = (props) => {
  const {navigation, route} = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Subscription</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleDescription}>{description}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Entypo name="dot-single" size={20} />
        <Text style={styles.titleExpire}>{expireTime}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleDescription}>{titleButton}</Text>
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={() => Alert.alert('Upgrade successful')}
        underlayColor={Colors.backgroundColor}>
        <Text style={styles.textButton}>Upgrade now</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...BoxModel.mediumMarginHorizontal,
    ...Styles.columnCenter,
    backgroundColor: Colors.backgroundColor,
  },
  titleContainer: {
    ...BoxModel.smallMarginVertical,
    width: Size.WIDTH,
  },
  descriptionContainer: {
    ...Styles.rowCenter,
    ...BoxModel.margin,
    ...BoxModel.mediumPaddingHorizontal,
    width: Size.WIDTH,
  },
  title: {
    ...BoxModel.mediumMarginHorizontal,
    ...BoxModel.smallMarginVertical,
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    color: Colors.blackColor,
  },
  titleDescription: {
    ...BoxModel.mediumMarginHorizontal,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    color: Colors.blackColor,
  },
  titleExpire: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    color: Colors.blackColor,
  },
  divider: {
    ...Styles.width100,
    height: 2,
    backgroundColor: Colors.blackColor,
  },
  button: {
    ...BoxModel.marginVertical,
    ...BoxModel.smallPadding,
    backgroundColor: Colors.primaryColor,
  },
  textButton: {
    ...Styles.textCenter,
    ...Typography.fontBold,
    fontSize: Typography.fontSize14,
    color: Colors.whiteColor,
  },
});
export default subscription;
