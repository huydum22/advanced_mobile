import React, {useEffect, useContext} from 'react';
import Navigator from './Navigation';
import {ThemeProvider} from './Provider/Theme';
import {LocalizeProvider} from './Provider/Localize';

import {AuthenticationProvider} from './Provider/Authentication';
// import Home from './scenes/Browse';
export default function App() {
  return (
    <ThemeProvider>
      <LocalizeProvider>
        <AuthenticationProvider>
          <Navigator />
        </AuthenticationProvider>
      </LocalizeProvider>
    </ThemeProvider>
  );
}
