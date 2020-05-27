import React from 'react';
import {TouchableHighlight, alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as scenes from '../../../scenes';
import * as screenName from '../../../config/ScreenName';
import {Colors, Typography, Distance} from '../../../styles';

const HomeStack = createStackNavigator();
const headerRight = (navigation) => (
  <TouchableHighlight
    onPress={() => {
      navigation.navigate(screenName.ProfileScreenName);
    }}
    underlayColor={Colors.primaryColor}
    style={{marginRight: Distance.spacing_14}}>
    <FontAwesome name="user" size={25} color={Colors.whiteColor} />
  </TouchableHighlight>
);
const configHomeNavigator = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const HomeNavigatorStack = () => {
  return (
    <HomeStack.Navigator screenOptions={configHomeNavigator}>
      <HomeStack.Screen
        name={screenName.HomeScreenName}
        component={scenes.Home}
        options={({navigation}) => ({
          title: 'Home',
          headerRight: () => headerRight(navigation),
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
    </HomeStack.Navigator>
  );
};
export default HomeNavigatorStack;
