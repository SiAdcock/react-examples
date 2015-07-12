'use strict';

import { ADD } from '../constants/actionTypes.js';

let initialState = {
  items: [{ id: 'item1', text: 'List Item 1' }]
};
let nextId = 1;

export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case ADD:
      return {
        items: [{
          id: 'item' + ++nextId,
          text: action.text
        }].concat(state.items)
      };
    default:
      return state;
  }
};
