import React, {useContext, useMemo} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as scenes from '../../../scenes';
import * as screenName from '../../../Constants/ScreenName';
import {Size, Typography, Distance, Styles} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {AuthenticationContext} from '../../../Provider/Authentication';
const HomeStack = createStackNavigator();

const HomeNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);

  const avatarHomeBar = useMemo(
    () => (
      <FastImage
        style={{
          width: Size.scaleSize(25),
          height: Size.scaleSize(25),
          borderRadius: Size.scaleSize(12.5),
        }}
        source={{
          uri: state.userInfo
            ? state.userInfo.avatar
            : 'https://c7.uihere.com/files/592/884/975/programmer-computer-programming-computer-software-computer-icons-programming-language-avatar.jpg',
        }}
      />
    ),
    [state.userInfo],
  );
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.themeColor,
        },
        headerTintColor: theme.primaryTextColor,
        headerTitleStyle: {
          ...Typography.fontBold,
          fontSize: Typography.fontSize20,
        },
      }}>
      <HomeStack.Screen
        name={screenName.HomeScreenName}
        component={scenes.Home}
        options={({navigation}) => ({
          title: 'Home',
          headerRight: () => (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate(screenName.ProfileScreenName);
              }}
              underlayColor={theme.overlayColor}
              style={{marginRight: Distance.spacing_14}}>
              <View>{avatarHomeBar}</View>
            </TouchableHighlight>
          ),
          headerLeft: () => (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate(screenName.OtherSettingScreenName);
              }}
              underlayColor={theme.overlayColor}
              style={{marginLeft: Distance.spacing_14}}>
              <MaterialIcons
                name="settings"
                size={25}
                color={theme.primaryTextColor}
              />
            </TouchableHighlight>
          ),
        })}
      />
      <HomeStack.Screen
        name={screenName.ShowListCourseScreenName}
        component={scenes.ListOfCourse}
        initialParams={{
          title: 'Course',
        }}
        options={({route}) => ({title: route.params.title})}
      />
      <HomeStack.Screen
        name={screenName.ProfileScreenName}
        component={scenes.Profile}
        options={{title: 'Profile'}}
      />
      <HomeStack.Screen
        name={screenName.ChangePasswordScreenName}
        component={scenes.ChangePassword}
        options={{title: 'Change Password'}}
      />
      <HomeStack.Screen
        name={screenName.UpdateProfileScreenName}
        component={scenes.UpdateProfile}
        options={{title: 'Update Profile'}}
      />
      <HomeStack.Screen
        name={screenName.ThemeScreenName}
        component={scenes.Theme}
        options={{title: 'Theme'}}
      />
      <HomeStack.Screen
        name={screenName.OtherSettingScreenName}
        component={scenes.OtherSetting}
        options={{title: 'Other Settings'}}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigatorStack;
