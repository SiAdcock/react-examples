'use strict';

import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { GET } from '../constants/actionTypes.js';

const action = createAction(GET, async () => {
  console.log('2.');
  const result = await fetch('/api/').then((res) => res.json());

  console.log(result);
  return result;
});

export default action;
