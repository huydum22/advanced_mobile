import {actionTypes} from '../../Actions/Favorite';
export const favoriteReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.FAVORITE_REQUEST:
      return {...prevState};
    case actionTypes.FAVORITE_SUCCESS:
      return {
        ...prevState,
        listFavorite: action.response.payload,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.FAVORITE_ERROR:
      return {
        ...prevState,
        listFavorite: [],
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default favoriteReducer;
