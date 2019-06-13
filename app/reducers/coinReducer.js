import { FETCH_COIN, FETCH_COIN_SUCCESS, FETCH_COIN_FAILURE } from '../actions/types';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case FETCH_COIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default coinReducer;
