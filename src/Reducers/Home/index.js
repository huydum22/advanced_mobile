import {actionTypes} from '../../Actions/Home';
export const homeReducer = (prevState, action) => {
  // requestTopNew,
  // requestTopSell,
  // requestTopRate,
  // requestRecommend,
  // requestInstructor,
  switch (action.type) {
    case actionTypes.HOME_REQUEST:
      return {...prevState};
    case actionTypes.HOME_SUCCESS:
      return {
        ...prevState,
        listTopNew: action.response[0].data.payload,
        listTopSell: action.response[1].data.payload,
        listTopRate: action.response[2].data.payload,
        listRecommended: action.response[3].data.payload,
        listInstructor: action.response[4].data.payload,
        isLoading: false,
      };
    case actionTypes.HOME_ERROR:
      return {
        ...prevState,
        listTopNew: [],
        listTopSell: [],
        listTopRate: [],
        listRecommended: [],
        listInstructor: [],
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default homeReducer;
