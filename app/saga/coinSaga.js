import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { apiBaseUrl } from '../utils/Constans';
import { FETCH_COIN, FETCH_COIN_SUCCESS, FETCH_COIN_FAILURE } from '../actions/types';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* coinSaga() {
  yield takeLatest(FETCH_COIN, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchCoinData() {
  return axios.get(`${apiBaseUrl}/v1/ticker/?limit=${10}`);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchCoinData);
    const coins = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCH_COIN_SUCCESS, coins });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCH_COIN_FAILURE, error });
  }
}
