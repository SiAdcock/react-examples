'use strict';

import { ADD } from '../constants/actionTypes.js';

export default (state, action) => {
  console.log(action);
  
  switch (action.type) {
    case ADD:
      return action.payload;
    default:
      return { items: [] };
  }
};
