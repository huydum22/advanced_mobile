import React, {useState} from 'react';

const SearchContext = React.createContext();

const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState({});
  return (
    <SearchContext.Provider
      value={{
        searchData,
        setSearchData,
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export {SearchProvider, SearchContext};
