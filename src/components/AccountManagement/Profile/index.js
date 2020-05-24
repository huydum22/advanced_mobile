import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import data from '../../../ExampleData/profile';
import {
  Colors,
  Size,
  Typography,
  Styles,
  BoxModel,
  Distance,
} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SubscriptionScreenName,
  LocationScreenName,
  AuthenticateTab,
  LoginScreenName,
} from '../../../config/ScreenName';
import Item from '../ProfileItem';
const Profile = (props) => {
  const {navigation, route} = props;
  const onPressSubscription = () => {
    navigation.navigate(SubscriptionScreenName, {
      screen: LoginScreenName,
    });
  };
  const onPressLocation = () => {
    // navigation.navigate(LocationScreenName);
  };
  const onPressLogout = () => {
    navigation.replace(AuthenticateTab, {
      screen: AuthenticateTab,
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <MaterialIcons name="person" size={26} color="#fff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{data.name}</Text>
            <Text style={styles.emailText}>{data.email}</Text>
          </View>
          <FontAwesome name="angle-right" size={26} color={Colors.blackColor} />
        </View>
        <View style={styles.divider} />
        <Item icon="theme-light-dark" name="Theme" />
        <Item icon="comment-account-outline" name="Communication Preferences" />
        <Item
          icon="hand-pointing-up"
          name="Subscription"
          onPress={onPressSubscription}
        />
        <Item
          icon="google-maps"
          name="Your location"
          onPress={onPressLocation}
        />
        <View style={styles.divider} />
        <Item icon="cloud-download" name="Download options" />
        <Item icon="view-stream" name="Streaming options" />
        <Item icon="video" name="Video playback options" />
        <View style={styles.divider} />
        <Item icon="send" name="Send feedback" />
        <Item icon="contact-mail" name="Contact support" />
        <Item icon="apps" name="App version" />
        <Item icon="tooltip-plus-outline" name="About us" />
        <View style={styles.divider} />
        <Item name="Log out" onPress={onPressLogout} />
      </View>
      <View style={styles.footer} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  mainContainer: {
    ...Styles.fillColumn,
  },
  userContainer: {
    backgroundColor: Colors.whiteColor,
    ...Styles.rowCenter,
    ...BoxModel.mediumPadding,
  },
  avatarContainer: {
    width: Size.scaleSize(50),
    height: Size.scaleSize(50),
    borderRadius: Size.scaleSize(25),
    ...Styles.center,
    backgroundColor: Colors.primaryColor,
  },
  textContainer: {
    flex: 1,
    marginLeft: Distance.spacing_20,
  },
  nameText: {
    color: Colors.primaryColor,
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  emailText: {
    color: Colors.grayDarkColor,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
  },
  divider: {
    height: Size.scaleSize(30),
  },
  footer: {
    height: Size.scaleSize(50),
    backgroundColor: Colors.backgroundColor,
  },
});
export default Profile;
