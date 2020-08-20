import React, {useReducer} from 'react';
import {favoriteReducer} from '../../Reducers/Favorite';
import {getFavoriteAction} from '../../Actions/Favorite';
const FavoriteContext = React.createContext();
const initialState = {
  isLoading: true,
  listFavorite: [],
  message: '',
};
const FavoriteProvider = (props) => {
  const [favorite, dispatch] = useReducer(favoriteReducer, initialState);

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        favoriteProvider: getFavoriteAction(dispatch),
      }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export {FavoriteProvider, FavoriteContext};
