import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography} from '../../../styles';
import * as screenName from '../../../config/ScreenName';

import * as scenes from '../../../scenes';
const DownloadStack = createStackNavigator();
const configDownloadNavigator = {
  title: 'Downloads',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};

const DownloadNavigator = () => {
  return (
    <DownloadStack.Navigator screenOptions={configDownloadNavigator}>
      <DownloadStack.Screen
        name={screenName.DownloadScreenName}
        component={scenes.Download}
      />
    </DownloadStack.Navigator>
  );
};
export default DownloadNavigator;
