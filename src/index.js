import React, {useEffect, useContext} from 'react';
import Navigator from './Navigation';
import {ThemeProvider} from './Provider/Theme';
// import Home from './scenes/Browse';
export default function App() {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}
