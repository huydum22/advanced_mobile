import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
// import data from '../../ExampleData/profile';
import {
  Colors,
  Size,
  Typography,
  Styles,
  BoxModel,
  Distance,
} from '../../styles';
import {
  ChangePasswordScreenName,
  AuthenticateTab,
  LoginScreenName,
  OtherSettingScreenName,
} from '../../Constants/ScreenName';
import {Item} from '../../components/AccountManagement';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import FastImage from 'react-native-fast-image';

const Account = (props) => {
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const {navigation, route} = props;
  const onPressChangePassword = () => {
    navigation.navigate(ChangePasswordScreenName, {
      screen: LoginScreenName,
    });
  };

  const onPressLocation = () => {
    // navigation.navigate(LocationScreenName);
  };
  const onPressOtherSetting = () => {
    navigation.navigate(OtherSettingScreenName);
  };
  return (
    <ScrollView
      style={{backgroundColor: theme.backgroundColor}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <FastImage
            style={{
              width: Size.scaleSize(150),
              height: Size.scaleSize(150),
              borderRadius: Size.scaleSize(75),
            }}
            source={{
              uri: state.userInfo.avatar,
            }}
          />
          <Text style={[styles.headerText, {color: theme.primaryTextColor}]}>
            {state.userInfo ? state.userInfo.email : ''}
          </Text>
          <Text style={[styles.headerSubText, {color: theme.grayColor}]}>
            {state.userInfo ? state.userInfo.phone : ''}
          </Text>
        </View>

        <Text style={[styles.headerTitleText, {color: theme.primaryTextColor}]}>
          Account Settings
        </Text>
        <View style={styles.divider} />
        <Item icon="account" name="Update Profile" />
        <Item
          icon="lock"
          name="Change Password"
          onPress={onPressChangePassword}
        />
        <Item
          icon="language-typescript"
          name="Update Your Favorite Categories"
          onPress={onPressLocation}
        />
        <Item
          icon="settings"
          name="Other Settings"
          onPress={onPressOtherSetting}
        />
        <View style={styles.divider} />
      </View>
      <View style={[styles.footer, {backgroundColor: theme.backgroundColor}]} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    ...Styles.fillColumn,
  },
  userContainer: {
    ...Styles.rowCenter,
    ...BoxModel.mediumPadding,
  },
  avatarContainer: {
    width: Size.scaleSize(50),
    height: Size.scaleSize(50),
    borderRadius: Size.scaleSize(25),
    ...Styles.center,
  },
  textContainer: {
    flex: 1,
    marginLeft: Distance.spacing_20,
  },
  nameText: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  emailText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
  },
  divider: {
    height: Size.scaleSize(20),
  },
  footer: {
    height: Size.scaleSize(50),
  },
  imageContainer: {...Styles.center, ...BoxModel.smallMarginVertical},
  headerText: {
    ...Typography.fontBold,
    ...BoxModel.marginVertical,
    fontSize: Typography.fontSize25,
  },
  headerSubText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize20,
  },
  headerTitleText: {
    ...Typography.fontBold,
    ...BoxModel.marginHorizontal,
    fontSize: Typography.fontSize18,
    marginTop: Distance.spacing_10,
  },
});
export default Account;
