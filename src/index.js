import React, {useEffect, useContext} from 'react';
import Navigator from './Navigation';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from './Provider/Theme';
// import Home from './scenes/Browse';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // return <Home />;
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}
