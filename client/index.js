'use strict';

import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import TodoListContainer from './../app/modules/components/todoListContainer.js';

const initialState = window.__data;
const redux = createRedux({}, initialState);

React.render(
  <Provider redux={redux}>
    {()=><TodoListContainer />}
  </Provider>,
  document.getElementById('container')
);
