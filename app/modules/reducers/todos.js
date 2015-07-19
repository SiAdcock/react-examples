'use strict';

import { ADD } from '../constants/actionTypes.js';
import { handleActions } from 'redux-actions';

let addReducer;
let todosMap = {};
let initialState = [];

addReducer = (state = initialState, action) => {
  return state.concat(action.payload);
};
todosMap[ADD] = addReducer;

export default handleActions(todosMap, []);