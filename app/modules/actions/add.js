'use strict';

import { ADD } from '../constants/actionTypes.js';

export function add(text) {
  return {
    type: ADD,
    text: text
  };
}
