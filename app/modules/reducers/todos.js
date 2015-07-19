'use strict';

import { GET, ADD } from '../constants/actionTypes.js';
import { handleActions } from 'redux-actions';

let todosMap = {};
let initialState = [];
let getReducer = (state = initialState) => {
  return state;
};
let addReducer = (state = initialState, action) => {
  return state.concat(action.payload);
};

todosMap[GET] = getReducer;
todosMap[ADD] = addReducer;

export default handleActions(todosMap, []);