import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from './types';

// export const fetchData = userData => {
//     return {
//         type: FETCH_USER,
//         payload: userData
//     }
// }

export function fetchUserData() {
  return (dispatch) => {
    dispatch(getUser());

    return (fetch('https://api.github.com/users/ardasatata'))
      .then(res => res.json())
      .then(json =>
      // console.log(json)
        (dispatch(getUserSuccess(json))))
      .catch(err => dispatch(getUserFailure(err)));
  };
}

function getUser() {
  return {
    type: FETCH_USER,
  };
}

function getUserSuccess(data) {
  console.log(data);
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
}

function getUserFailure() {
  return {
    type: FETCH_USER_FAILURE,
  };
}
