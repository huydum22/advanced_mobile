import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography} from '../../../styles';

import {BrowseScreenName} from '../../../config/ScreenName';

import Browse from '../../../scenes/Browse';
const BrowseStack = createStackNavigator();
const configBrowseNavigator = {
  title: 'Browse',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const BrowseNavigatorStack = () => {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name={BrowseScreenName}
        component={Browse}
        options={configBrowseNavigator}
      />
    </BrowseStack.Navigator>
  );
};
export default BrowseNavigatorStack;
