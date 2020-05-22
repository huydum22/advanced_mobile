import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../../scenes/Profile';
import {ProfileScreenName} from '../../../config/ScreenName';
import {Colors, Typography} from '../../../styles';

const ProfileStack = createStackNavigator();
const configProfileNavigator = {
  title: 'Profile',
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
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={ProfileScreenName}
        component={Profile}
        options={configProfileNavigator}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileNavigatorStack;
