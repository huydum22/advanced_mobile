import React, {useState} from 'react';

const ThemeContext = React.createContext();
import {lightTheme} from '../../styles';
const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
