import React, {useContext, useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Item} from '../../components/AccountManagement';
import {Styles, Size, darkTheme, lightTheme} from '../../styles';
import * as screenName from '../../Constants/ScreenName';
import {useAsyncStorage} from '@react-native-community/async-storage';

const OtherSetting = (props) => {
  const {navigation, route} = props;
  const setDarkMode = useAsyncStorage('@setTheme');

  const {theme, setTheme} = useContext(ThemeContext);
  const {state, logoutProvider} = useContext(AuthenticationContext);
  const {getItem} = useAsyncStorage('@userToken');
  const [dark, setDark] = useState(false);
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

  useEffect(() => {
    const getTheme = async () => {
      const item = await setDarkMode.getItem();
      const jsonValue = JSON.parse(item);
      setDark(false);
      if (jsonValue) {
        if (jsonValue.dark) {
          setDark(true);
        }
      }
    };
    getTheme();
  }, []);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setDarkMode.setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const switchTheme = async () => {
    const item = await setDarkMode.getItem();
    const jsonValue = JSON.parse(item);
    setDark(!dark);

    if (jsonValue) {
      if (jsonValue.dark) {
        let value = {dark: false};
        storeData(value);
        setTheme(lightTheme);
      } else {
        let value = {dark: true};
        storeData(value);
        setTheme(darkTheme);
      }
    } else {
      setTheme(lightTheme);
    }
  };
  return (
    // <SafeAreaView>
    <ScrollView
      style={{backgroundColor: theme.backgroundColor}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <Item
          icon="lightbulb-outline"
          name="Dark mode"
          // onPress={onPressTheme}
          isSwitch={true}
          isEnabledSwitch={dark}
          toggleSwitch={switchTheme}
        />
        {/* <Item icon="cloud-download" name="Download options" />
        <Item icon="view-stream" name="Streaming options" />
        <Item icon="videocam" name="Video playback options" /> */}
        <Item icon="send" name="Send feedback" />
        <Item icon="contact-mail" name="Contact support" />
        <Item icon="apps" name="App version" />
        <Item icon="info-outline" name="About us" />
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
