import {createStackNavigator} from '@react-navigation/stack';

const AuthNavigatorConfig = {
  // initialRouteName: 'Login',
  // header: null,
  // headerMode: 'none',
};

const RouteConfigs = {
  // Login: LoginScreen,
};
const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);
export default AuthNavigator;
