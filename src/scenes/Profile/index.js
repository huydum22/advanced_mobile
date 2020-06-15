import React, {useContext, useEffect} from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SubscriptionScreenName,
  AuthenticateTab,
  LoginScreenName,
  ThemeScreenName,
} from '../../config/ScreenName';
import {Item} from '../../components/AccountManagement';
import {AuthenticationContext} from '../../Provider/Authentication';
import {LogoutProvider} from '../../services/Authentication';
import {ThemeContext} from '../../Provider/Theme';
const Account = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const onPressSubscription = () => {
    navigation.navigate(SubscriptionScreenName, {
      screen: LoginScreenName,
    });
  };
  useEffect(() => {
    if (
      authentication &&
      authentication.status === 200 &&
      authentication.isLogin === false
    ) {
      navigation.replace(AuthenticateTab, {
        screen: AuthenticateTab,
      });
    }
  });
  const onPressLocation = () => {
    // navigation.navigate(LocationScreenName);
  };
  const onPressTheme = () => {
    navigation.navigate(ThemeScreenName);
  };

  const {authentication, setAuthentication} = useContext(AuthenticationContext);
  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: theme.backgroundColor}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View
            style={[
              styles.userContainer,
              {backgroundColor: theme.primaryBackgroundColor},
            ]}>
            <View
              style={[
                styles.avatarContainer,
                {backgroundColor: theme.primaryColor},
              ]}>
              <MaterialIcons name="person" size={26} color="#fff" />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.nameText, {color: theme.primaryTextColor}]}>
                {authentication.user ? authentication.user.name : ''}
              </Text>
              <Text style={[styles.emailText, {color: theme.primaryTextColor}]}>
                {authentication.user ? authentication.user.email : ''}
              </Text>
            </View>
            <FontAwesome
              name="angle-right"
              size={26}
              color={theme.primaryTextColor}
            />
          </View>
          <View style={styles.divider} />
          <Item icon="theme-light-dark" name="Theme" onPress={onPressTheme} />
          <Item
            icon="comment-account-outline"
            name="Communication Preferences"
          />
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
          <Item
            name="Log out"
            onPress={() => {
              setAuthentication(LogoutProvider());
            }}
          />
        </View>
        <View
          style={[styles.footer, {backgroundColor: theme.backgroundColor}]}
        />
      </ScrollView>
    </SafeAreaView>
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
});
export default Account;
