import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {Styles, Colors, Typography, Size, BoxModel} from '../../styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {ThemeContext} from '../../Provider/Theme';
const description = 'You have access to the following limited subscriptions:';
const expireTime = 'Free account (Limited Library) (expires May 14, 2021)';
const titleButton = 'Click Upgrade to subscribe to our full library';
const Subscription = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  return (
    <SafeAreaView
      style={[styles.safeAreaView, {backgroundColor: theme.backgroundColor}]}>
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, {color: theme.primaryTextColor}]}>
            Subscription
          </Text>
        </View>
        <View
          style={[styles.divider, {backgroundColor: theme.primaryTextColor}]}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[styles.titleDescription, {color: theme.primaryTextColor}]}>
            {description}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Entypo name="dot-single" size={20} color={theme.primaryTextColor} />
          <Text style={[styles.titleExpire, {color: theme.primaryTextColor}]}>
            {expireTime}
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text
            style={[styles.titleDescription, {color: theme.primaryTextColor}]}>
            {titleButton}
          </Text>
        </View>
        <TouchableHighlight
          style={[styles.button, {backgroundColor: theme.primaryColor}]}
          onPress={() => Alert.alert('Upgrade successful')}
          underlayColor={theme.backgroundColor}>
          <Text style={[styles.textButton, {color: theme.primaryTextColor}]}>
            Upgrade now
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  container: {
    flex: 1,
    ...BoxModel.mediumMarginHorizontal,
    ...Styles.columnCenter,
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
  },
  titleDescription: {
    ...BoxModel.mediumMarginHorizontal,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
  titleExpire: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
  divider: {
    ...Styles.width100,
    height: 2,
  },
  button: {
    ...BoxModel.marginVertical,
    ...BoxModel.smallPadding,
  },
  textButton: {
    ...Styles.textCenter,
    ...Typography.fontBold,
    fontSize: Typography.fontSize14,
  },
});
export default Subscription;
