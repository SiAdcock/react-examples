'use strict';

import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { GET } from '../constants/actionTypes.js';

const action = createAction(GET, async (server) => {
  let url = '/api/';
  let result;

  if (server) {
    url = 'http://localhost:8080' + url;
  }
  result = await fetch(url).then((res) => res.json());

  return result;
});

export default action;
