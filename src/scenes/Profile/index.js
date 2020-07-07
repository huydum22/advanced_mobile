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
  OtherSettingScreenName,
} from '../../Constants/ScreenName';
import {Avatar} from 'react-native-elements';
import {Item} from '../../components/AccountManagement';
import {AuthenticationContext} from '../../Provider/Authentication';
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
  const onPressOtherSetting = () => {
    navigation.navigate(OtherSettingScreenName);
  };

  const {authentication} = useContext(AuthenticationContext);
  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: theme.backgroundColor}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Avatar
              size="xlarge"
              rounded
              title={authentication.user.email.slice(0, 2)}
              containerStyle={{backgroundColor: theme.primaryColor}}
              // onPress={() => console.log('Works!')}
            />
            <Text style={[styles.headerText, {color: theme.primaryTextColor}]}>
              {authentication.user ? authentication.user.name : ''}
            </Text>
            <Text style={[styles.headerSubText, {color: theme.grayColor}]}>
              {authentication.user ? authentication.user.email : ''}
            </Text>
          </View>

          <Text
            style={[styles.headerTitleText, {color: theme.primaryTextColor}]}>
            Account Settings
          </Text>
          <View style={styles.divider} />
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
          <Item
            icon="settings"
            name="Other Settings"
            onPress={onPressOtherSetting}
          />
          <View style={styles.divider} />
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
