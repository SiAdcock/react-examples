'use strict';

import { createStore, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';

const create = (reducers, initialState) => {
  const reducer = combineReducers(reducers);
  return createStore(reducer, initialState, [promiseMiddleware]);
};

export default create;
