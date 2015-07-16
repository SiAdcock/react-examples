'use strict';

import fetch from 'isomorphic-fetch';
import { ADD } from '../constants/actionTypes.js';

export default function(text) {
  return {
    type: ADD,
    text: text,
    promise: fetch('/api/add', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text
      })
    })
  };
}
