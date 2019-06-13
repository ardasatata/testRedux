import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import placeReducer from './reducers/placeReducer';
import userReducer from './reducers/userReducer';
import coinReducer from './reducers/coinReducer';
import coinSaga from './saga/coinSaga';

export const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  places: placeReducer,
  users: userReducer,
  coins: coinReducer,
});

// const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

const configureStore = () => {
  return {
    createStore: () => createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware)),
    runSaga: () => sagaMiddleware.run(coinSaga),
  };
};

export default configureStore;
