import React, {useContext} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Item} from '../../components/AccountManagement';
import {Styles} from '../../styles';
import {LogoutProvider} from '../../services/Authentication';
import * as screenName from '../../Constants/ScreenName';
const OtherSetting = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {setAuthentication} = useContext(AuthenticationContext);
  const onPressTheme = () => {
    navigation.navigate(screenName.ThemeScreenName);
  };
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
              setAuthentication(LogoutProvider());
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
