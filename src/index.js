import React, {useEffect, useContext} from 'react';
import Navigator from './Navigation';
import {ThemeProvider} from './Provider/Theme';
import {TokenProvider} from './Provider/Token';
// import Home from './scenes/Browse';
export default function App() {
  return (
    <ThemeProvider>
      <TokenProvider>
        <Navigator />
      </TokenProvider>
    </ThemeProvider>
  );
}
