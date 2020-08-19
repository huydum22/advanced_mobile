import React, {useReducer} from 'react';
import {categoryReducer} from '../../Reducers/Category';
import {getCategoryAction} from '../../Actions/Category';
const CategoryContext = React.createContext();
const initialState = {
  isLoading: true,
  listCategory: null,
  message: '',
};
const CategoryProvider = (props) => {
  const [category, dispatch] = useReducer(categoryReducer, initialState);

  return (
    <CategoryContext.Provider
      value={{
        category,
        categoryProvider: getCategoryAction(dispatch),
      }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export {CategoryProvider, CategoryContext};
