import {actionTypes} from '../../Actions/Category';
export const categoryReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_REQUEST:
      return {...prevState};
    case actionTypes.CATEGORY_SUCCESS:
      return {
        ...prevState,
        listCategory: action.response.payload,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.CATEGORY_ERROR:
      return {
        ...prevState,
        listCategory: null,
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default categoryReducer;
