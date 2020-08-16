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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LocalizeContext} from '../../../Provider/Localize';
const HomeStack = createStackNavigator();

const HomeNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const {localize} = useContext(LocalizeContext);
  const avatarHomeBar = useMemo(
    () => (
      <FastImage
        style={Styles.avatarIcon}
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
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Ionicons
            name="chevron-back-outline"
            size={36}
            color={theme.primaryColor}
          />
        ),
      }}>
      <HomeStack.Screen
        name={screenName.HomeScreenName}
        component={scenes.Home}
        options={({navigation}) => ({
          title: localize.homeTitle,
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
          title: localize.course,
        }}
        options={({route}) => ({title: route.params.title})}
      />
      <HomeStack.Screen
        name={screenName.ProfileScreenName}
        component={scenes.Profile}
        options={{title: localize.profileTitle}}
      />
      <HomeStack.Screen
        name={screenName.ChangePasswordScreenName}
        component={scenes.ChangePassword}
        options={{title: localize.profilePassword}}
      />
      <HomeStack.Screen
        name={screenName.UpdateProfileScreenName}
        component={scenes.UpdateProfile}
        options={{title: localize.profileUpdate}}
      />

      <HomeStack.Screen
        name={screenName.OtherSettingScreenName}
        component={scenes.OtherSetting}
        options={{title: localize.profileOtherSetting}}
      />
      <HomeStack.Screen
        name={screenName.CourseDetailScreenName}
        component={scenes.CourseDetail}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={screenName.FeedBackStack}
        component={scenes.SeeFeedBack}
        options={{title: 'Feedback'}}
        initialParams={{
          item: 'item',
          averagePoint: 0,
          contentPoint: 0,
          presentationPoint: 0,
          formalityPoint: 0,
        }}
      />
      <HomeStack.Screen
        name={screenName.WriteFeedBackScreen}
        component={scenes.WriteFeedBack}
        options={{title: localize.feedback}}
      />
      <HomeStack.Screen
        name={screenName.AuthorDetailScreenName}
        component={scenes.AuthorDetail}
        options={{title: localize.searchAuthor}}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigatorStack;
