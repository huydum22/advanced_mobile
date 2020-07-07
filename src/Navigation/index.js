import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import * as screenName from '../Constants/ScreenName';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import CourseDetailNavigator from './AppNavigator/CourseDetailNavigator';
import {AuthenticationProvider} from '../Provider/Authentication';
import {CoursesProvider} from '../Provider/Course';
import {FavoriteProvider} from '../Provider/Favorite';
import {ThemeContext} from '../Provider/Theme';
import {darkTheme} from '../styles';
const RootStack = createStackNavigator();

const RootScreen = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      mode="modal"
      initialRouteName={screenName.AuthenticateTab}>
      <RootStack.Screen name={screenName.AppTab} component={AppNavigator} />
      <RootStack.Screen
        name={screenName.AuthenticateTab}
        component={AuthNavigator}
      />
      <RootStack.Screen
        name={screenName.CourseDetailScreenStack}
        component={CourseDetailNavigator}
        options={{animationEnabled: true}}
      />
    </RootStack.Navigator>
  );
};
const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <SafeAreaProvider>
      {theme === darkTheme ? (
        <StatusBar translucent barStyle="light-content" />
      ) : (
        <StatusBar translucent barStyle="dark-content" />
      )}
      <AuthenticationProvider>
        <CoursesProvider>
          <FavoriteProvider>
            <NavigationContainer>
              <RootScreen />
            </NavigationContainer>
          </FavoriteProvider>
        </CoursesProvider>
      </AuthenticationProvider>
    </SafeAreaProvider>
  );
};
export default Navigation;
