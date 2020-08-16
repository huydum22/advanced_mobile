import React, {useState} from 'react';

const LocalizeContext = React.createContext();
import {vn} from '../../Constants/localize';
const LocalizeProvider = (props) => {
  const [localize, setLocalize] = useState(vn);
  return (
    <LocalizeContext.Provider
      value={{
        localize,
        setLocalize,
      }}>
      {props.children}
    </LocalizeContext.Provider>
  );
};

export {LocalizeProvider, LocalizeContext};
