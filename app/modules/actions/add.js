'use strict';

import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { ADD } from '../constants/actionTypes.js';

const action = createAction(ADD, async text => {

  const result = await fetch('/api/add', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text
    })
  }).then((res) => res.json()).then((json) => json);

  return result.items;
});

export default action;
