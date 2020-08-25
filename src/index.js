import React from 'react';
import Navigator from './Navigation';
import {ThemeProvider} from './Provider/Theme';
import {LocalizeProvider} from './Provider/Localize';

import {AuthenticationProvider} from './Provider/Authentication';
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
