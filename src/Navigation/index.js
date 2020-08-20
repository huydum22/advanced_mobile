import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import * as screenName from '../Constants/ScreenName';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import CourseDetailNavigator from './AppNavigator/CourseDetailNavigator';
import SplashScreen from '../scenes/SplashScreen';
import PlayReview from '../scenes/PlayReview';
import {AuthenticationContext} from '../Provider/Authentication';
import {ThemeContext} from '../Provider/Theme';
import {darkTheme} from '../styles';
import {CategoryProvider} from '../Provider/Category';
import {FavoriteProvider} from '../Provider/Favorite';
import {MyCourseProvider} from '../Provider/MyCourse';

const RootStack = createStackNavigator();

const RootScreen = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      mode="modal"
      initialRouteName={screenName.SplashScreen}>
      <RootStack.Screen
        name={screenName.SplashScreen}
        component={SplashScreen}
      />
      <RootStack.Screen name={screenName.AppTab} component={AppNavigator} />
      <RootStack.Screen
        name={screenName.AuthenticateTab}
        component={AuthNavigator}
      />
      <RootStack.Screen
        name={screenName.LessonCourseScreenStack}
        component={CourseDetailNavigator}
        options={{animationEnabled: true}}
      />

      <RootStack.Screen
        name={screenName.PlayVideoScreenName}
        component={PlayReview}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
const Navigation = () => {
  const {theme} = useContext(ThemeContext);
  const {loginProvider, loginGGProvider} = useContext(AuthenticationContext);

  const {getItem} = useAsyncStorage('@userToken');

  const readItemFromStorage = async () => {
    const item = await getItem();
    const jsonValue = JSON.parse(item);
    if (item !== null) {
      if (jsonValue.id) {
        try {
          return await loginGGProvider(jsonValue.email, jsonValue.id);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          return await loginProvider(jsonValue.email, jsonValue.password);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  useEffect(() => {
    readItemFromStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaProvider>
      {theme === darkTheme ? (
        <StatusBar translucent barStyle="light-content" />
      ) : (
        <StatusBar translucent barStyle="dark-content" />
      )}
      <CategoryProvider>
        <FavoriteProvider>
          <MyCourseProvider>
            <NavigationContainer>
              <RootScreen />
            </NavigationContainer>
          </MyCourseProvider>
        </FavoriteProvider>
      </CategoryProvider>
    </SafeAreaProvider>
  );
};
export default Navigation;
