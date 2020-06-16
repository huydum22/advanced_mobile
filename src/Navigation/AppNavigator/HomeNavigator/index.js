import React, {useContext} from 'react';
import {TouchableHighlight, alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as scenes from '../../../scenes';
import * as screenName from '../../../config/ScreenName';
import {Colors, Typography, Distance} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';

const HomeStack = createStackNavigator();

const HomeNavigatorStack = () => {
  const {theme} = useContext(ThemeContext);

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
              <FontAwesome
                name="user"
                size={25}
                color={theme.primaryTextColor}
              />
            </TouchableHighlight>
          ),
          headerLeft: () => (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate(screenName.OtherSettingScreenName);
              }}
              underlayColor={theme.overlayColor}
              style={{marginLeft: Distance.spacing_14}}>
              <MaterialCommunityIcons
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
        name={screenName.SubscriptionScreenName}
        component={scenes.Subscription}
        options={{title: 'Subscription'}}
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
