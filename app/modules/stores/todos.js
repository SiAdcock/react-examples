'use strict';

import { ADD } from '../constants/actionTypes.js';

export default (state, action) => {
  switch (action.type) {
    case ADD:
      return { items: action.text };
    default:
      return { items: [] };
  }
};
