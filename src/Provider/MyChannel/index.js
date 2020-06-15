import React, {useState} from 'react';

const MyChannelContext = React.createContext();

const MyChannelProvider = (props) => {
  const [myChannelPath, setMyChannelPath] = useState([]);
  return (
    <MyChannelContext.Provider
      value={{
        myChannelPath,
        setMyChannelPath,
      }}>
      {props.children}
    </MyChannelContext.Provider>
  );
};

export {MyChannelProvider, MyChannelContext};
