import React, {useState} from 'react';
import {useAsyncStorage} from '@react-native-community/async-storage';

const ThemeContext = React.createContext();
import {lightTheme, darkTheme} from '../../styles';
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
