import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../../scenes/Profile';
import Subscription from '../../../scenes/Subscription';
import {
  ProfileScreenName,
  LocationScreenName,
  SubscriptionScreenName,
} from '../../../config/ScreenName';
import {Colors, Typography} from '../../../styles';

const ProfileStack = createStackNavigator();
const configProfileNavigator = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const ProfileNavigatorStack = () => {
  return (
    <ProfileStack.Navigator screenOptions={configProfileNavigator}>
      <ProfileStack.Screen
        name={ProfileScreenName}
        component={Profile}
        options={{title: 'Profile'}}
      />
      <ProfileStack.Screen
        name={SubscriptionScreenName}
        component={Subscription}
        options={{title: 'Subscription'}}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileNavigatorStack;
