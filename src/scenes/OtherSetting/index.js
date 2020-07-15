import React, {useContext, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Item} from '../../components/AccountManagement';
import {Styles, Size} from '../../styles';
import * as screenName from '../../Constants/ScreenName';
import {useAsyncStorage} from '@react-native-community/async-storage';

const OtherSetting = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {state, logoutProvider} = useContext(AuthenticationContext);
  const {getItem} = useAsyncStorage('@userToken');
  const onPressTheme = () => {
    navigation.navigate(screenName.ThemeScreenName);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await getItem();
        if (value !== null) {
          // value previously stored
        } else {
          navigation.replace(screenName.AuthenticateTab, {
            screen: screenName.IntroScreenName,
          });
        }
      } catch (e) {
        navigation.replace(screenName.AuthenticateTab, {
          screen: screenName.IntroScreenName,
        });
        // error reading value
      }
    };
    getData();
  });

  return (
    // <SafeAreaView>
    <ScrollView
      style={{backgroundColor: theme.backgroundColor}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <Item icon="theme-light-dark" name="Theme" onPress={onPressTheme} />
        <Item icon="cloud-download" name="Download options" />
        <Item icon="view-stream" name="Streaming options" />
        <Item icon="video" name="Video playback options" />
        <Item icon="send" name="Send feedback" />
        <Item icon="contact-mail" name="Contact support" />
        <Item icon="apps" name="App version" />
        <Item icon="tooltip-plus-outline" name="About us" />
        <Item
          name="Log out"
          onPress={() => {
            logoutProvider();
          }}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    ...Styles.fillColumn,
  },
  safeAreaView: {
    width: Size.WIDTH,
    height: Size.HEIGHT,
  },
});
export default OtherSetting;
