import React, {useContext, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Item} from '../../components/AccountManagement';
import {Styles} from '../../styles';
import * as screenName from '../../Constants/ScreenName';
import AsyncStorage from '@react-native-community/async-storage';

const OtherSetting = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {state, logoutProvider} = useContext(AuthenticationContext);
  const onPressTheme = () => {
    navigation.navigate(screenName.ThemeScreenName);
  };
  useEffect(() => {
    // if (state.isAuthenticated === false) {
    //   navigation.replace(screenName.AuthenticateTab, {
    //     screen: screenName.IntroScreenName,
    //   });
    // }
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@userToken');
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
  }, [state, navigation]);

  console.log(state);
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    ...Styles.fillColumn,
  },
});
export default OtherSetting;
