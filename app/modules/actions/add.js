'use strict';

import { ADD } from '../constants/actionTypes.js';

export default function(text) {
  return {
    type: ADD,
    text: text
  };
}