
import { createStore, composeReducers } from 'redux';
import promiseMiddleware from 'redux-promise';

const create = (reducers, initialState) => {
  const reducer = composeReducers(reducers);
  return createStore(reducer, initialState, [promiseMiddleware]);
};

export default create;
