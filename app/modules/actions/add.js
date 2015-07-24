'use strict';

import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { ADD } from '../constants/actionTypes.js';

const action = createAction(ADD, async payload => {
  const result = await fetch('/api/add', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((res) => res.json());

  return result;
});

export default action;
