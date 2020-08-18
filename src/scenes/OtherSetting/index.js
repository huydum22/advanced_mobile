import React, {useContext, useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Item} from '../../components/AccountManagement';
import {Styles, Size, darkTheme, lightTheme} from '../../styles';
import * as screenName from '../../Constants/ScreenName';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {LocalizeContext} from '../../Provider/Localize';
import {vn, en} from '../../Constants/localize';
const OtherSetting = (props) => {
  const {navigation, route} = props;
  const setDarkMode = useAsyncStorage('@setTheme');
  const setLanguage = useAsyncStorage('@setLanguage');

  const {theme, setTheme} = useContext(ThemeContext);
  const {localize, setLocalize} = useContext(LocalizeContext);
  const {state, logoutProvider} = useContext(AuthenticationContext);
  const {getItem} = useAsyncStorage('@userToken');
  const [dark, setDark] = useState(false);
  const [eng, setEng] = useState(false);

  const {
    settingDarkMode,
    settingFeedBack,
    settingLanguage,
    settingContact,
    settingVersion,
    settingAbout,
    settingLogout,
  } = localize;
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
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        const item = await setDarkMode.getItem();
        const jsonValue = JSON.parse(item);
        setDark(false);
        if (jsonValue) {
          if (jsonValue.dark) {
            setDark(true);
          }
        }
        const itemEnd = await setLanguage.getItem();
        const jsonValueEnd = JSON.parse(itemEnd);
        setEng(false);
        if (jsonValueEnd) {
          if (jsonValueEnd.en) {
            setEng(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    });

    return unsubscribe;
  }, [navigation, setDarkMode, setLanguage]);

  const storeDataEn = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setLanguage.setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setDarkMode.setItem(jsonValue);
    } catch (e) {}
  };

  const switchTheme = async () => {
    if (dark) {
      let value = {dark: false};
      setDark(false);
      storeData(value);
      setTheme(lightTheme);
    } else {
      let value = {dark: true};
      setDark(true);

      storeData(value);
      setTheme(darkTheme);
    }
  };
  const switchEn = async () => {
    if (eng) {
      let value = {en: false};
      setEng(false);
      storeDataEn(value);
      setLocalize(vn);
    } else {
      let value = {en: true};
      setEng(true);
      storeDataEn(value);
      setLocalize(en);
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
          name={settingDarkMode}
          isSwitch={true}
          isEnabledSwitch={dark}
          toggleSwitch={switchTheme}
        />
        {/* <Item icon="cloud-download" name="Download options" />
        <Item icon="view-stream" name="Streaming options" />
        <Item icon="videocam" name="Video playback options" /> */}
        <Item
          icon="language"
          name={settingLanguage}
          isSwitch={true}
          isEnabledSwitch={eng}
          toggleSwitch={switchEn}
        />

        <Item icon="send" name={settingFeedBack} />
        <Item icon="contact-mail" name={settingContact} />
        <Item icon="apps" name={settingVersion} />
        <Item icon="info-outline" name={settingAbout} />
        <Item
          name={settingLogout}
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
