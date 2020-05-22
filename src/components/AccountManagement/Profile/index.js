import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import data from '../../../ExampleData/profile';
// import colors from '../../../styles/color';
// import size from '../../../styles/size';
import {Colors, Size} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Item from '../ProfileItem';
const Profile = (props) => {
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
        <Item name="Log out" />
      </View>
      <View style={styles.footer} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    height: Size.HEIGHT,
  },
  mainContainer: {
    flex: 1,
  },
  userContainer: {
    backgroundColor: Colors.whiteColor,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  nameText: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: '500',
  },
  emailText: {
    color: '#828282',
  },
  divider: {
    height: 20,
  },
  footer: {
    height: 50,
    backgroundColor: Colors.backgroundColor,
  },
});
export default Profile;
