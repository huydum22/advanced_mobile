import {API} from '../../services';
import {
  TOP_NEW,
  TOP_SELL,
  TOP_RATE,
  RECOMMEND_COURSE,
  INSTRUCTOR,
} from '../../Constants/API';
import axios from 'axios';
const body = {
  limit: 6,
  offset: 0,
};
export const actionTypes = {
  HOME_REQUEST: 'HOME_REQUEST',
  HOME_ERROR: 'HOME_ERROR',
  HOME_SUCCESS: 'HOME_SUCCESS',
};
const homeRequest = () => ({
  type: actionTypes.HOME_REQUEST,
});
const homeError = (error) => ({
  type: actionTypes.HOME_ERROR,
  error,
});
const homeSuccess = (response) => ({
  type: actionTypes.HOME_SUCCESS,
  response,
});

export const fetchHomeDataAction = (dispatch) => (userID) => {
  dispatch(homeRequest);

  const requestTopNew = API.post(TOP_NEW, body);
  const requestTopSell = API.post(TOP_SELL, body);
  const requestTopRate = API.post(TOP_RATE, body);
  const requestRecommend = API.get(
    `${RECOMMEND_COURSE}/${userID}/${body.limit}/${body.offset}`,
  );
  const requestInstructor = API.get(INSTRUCTOR);
  axios
    .all([
      requestTopNew,
      requestTopSell,
      requestTopRate,
      requestRecommend,
      requestInstructor,
    ])
    .then(
      axios.spread((...responses) => {
        dispatch(homeSuccess(responses));
      }),
    )
    .catch((err) => {
      dispatch(homeError(err));
    });
};
