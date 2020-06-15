import React, {useState} from 'react';

const MyPathContext = React.createContext();

const MyPathProvider = (props) => {
  const [myPath, setMyPath] = useState([]);
  return (
    <MyPathContext.Provider
      value={{
        myPath,
        setMyPath,
      }}>
      {props.children}
    </MyPathContext.Provider>
  );
};

export {MyPathProvider, MyPathContext};
