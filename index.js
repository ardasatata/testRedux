/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider, app } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { name as appName } from './app.json';
import Root from './app/router';

import configureStore from './app/store';
import coinSaga from './app/saga/coinSaga';


const store = configureStore();
const sagaMiddleware = createSagaMiddleware();

const RNRedux = () => (
  <Provider store={store.createStore()}>
    <Root />
  </Provider>
);

store.runSaga();

AppRegistry.registerComponent(appName, () => RNRedux);

s//agaMiddleware.run(coinSaga);
