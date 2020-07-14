import React, {useEffect, useContext} from 'react';
import Navigator from './Navigation';
import {ThemeProvider} from './Provider/Theme';
import {AuthenticationProvider} from './Provider/Authentication';
// import Home from './scenes/Browse';
export default function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
          <Navigator />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
