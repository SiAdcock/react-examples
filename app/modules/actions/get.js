'use strict';

import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { GET } from '../constants/actionTypes.js';

const action = createAction(GET, async () => {
  const result = await fetch('/api/', {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json());

  return result;
});

export default action;
