import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography} from '../../../styles';
import {DownloadScreenName} from '../../../config/ScreenName';

import Download from '../../../scenes/Download';
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
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name={DownloadScreenName}
        component={Download}
        options={configDownloadNavigator}
      />
    </DownloadStack.Navigator>
  );
};
export default DownloadNavigator;
