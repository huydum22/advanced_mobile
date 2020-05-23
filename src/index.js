import React, {useEffect} from 'react';
import Navigator from './Navigation';
import SplashScreen from 'react-native-splash-screen';
// import Home from './scenes/Browse';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // return <Home />;
  return <Navigator />;
}
