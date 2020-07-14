import React, {useState} from 'react';

const RecentSearchContext = React.createContext();

const RecentSearchProvider = (props) => {
  const [keyword, setKeyword] = useState(['swift', 'web']);
  return (
    <RecentSearchContext.Provider
      value={{
        keyword,
        setKeyword,
      }}>
      {props.children}
    </RecentSearchContext.Provider>
  );
};

export {RecentSearchProvider, RecentSearchContext};
