import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Typography} from '../../../styles';
import * as screenName from '../../../config/ScreenName';

import * as scenes from '../../../scenes';
import {ThemeContext} from '../../../Provider/Theme';
const DownloadStack = createStackNavigator();

const DownloadNavigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <DownloadStack.Navigator
      screenOptions={{
        title: 'Downloads',
        headerStyle: {
          backgroundColor: theme.themeColor,
        },
        headerTintColor: theme.primaryTextColor,
        headerTitleStyle: {
          ...Typography.fontBold,
          fontSize: Typography.fontSize20,
        },
      }}>
      <DownloadStack.Screen
        name={screenName.DownloadScreenName}
        component={scenes.Download}
      />
    </DownloadStack.Navigator>
  );
};
export default DownloadNavigator;
