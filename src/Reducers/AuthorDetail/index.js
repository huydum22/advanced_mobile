import {actionTypes} from '../../Actions/AuthorDetail';
export const authorDetailReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.AUTHOR_DETAIL_REQUEST:
      return {...prevState};
    case actionTypes.AUTHOR_DETAIL_SUCCESS:
      return {
        ...prevState,
        authorDetail: action.response.payload,
        message: action.response.message,
        isLoading: false,
      };
    case actionTypes.AUTHOR_DETAIL_ERROR:
      return {
        ...prevState,
        authorDetail: [],
        message: action.response.message,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default authorDetailReducer;
