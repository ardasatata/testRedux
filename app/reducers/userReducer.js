import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/types';

const initialState = {
  userData: [],
  isFetching: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userReducer;
