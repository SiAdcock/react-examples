
import { createStore, composeReducers } from 'redux';
import promiseMiddleware from 'redux-promise';

const create = (stores, initialState) => {
  const reducer = composeReducers(stores);
  return createStore(reducer, initialState, [promiseMiddleware]);
};

export default create;
