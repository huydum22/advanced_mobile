import React, {useState, useReducer} from 'react';
import {searchResultReducer} from '../../Reducers/Search';
import {getSearchResult} from '../../Actions/Search';
const SearchContext = React.createContext();
const initialState = {
  isLoading: true,
  totalCourse: 0,
  listCourse: [],
  totalAuthor: 0,
  listAuthor: [],
  message: '',
};
const SearchProvider = (props) => {
  const [searchResultData, dispatch] = useReducer(
    searchResultReducer,
    initialState,
  );

  return (
    <SearchContext.Provider
      value={{
        searchResultData,
        searchResultProvider: getSearchResult(dispatch),
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export {SearchProvider, SearchContext};
