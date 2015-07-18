'use strict';

import React from 'react';
import create from '../app/modules/redux';
import { Provider } from 'redux/react';
import TodoListContainer from './../app/modules/components/todoListContainer.js';
import * as reducers from './../app/modules/reducers/index';

const initialState = window.__data;
const store = create(reducers, initialState);

React.render(
  <Provider store={store}>
    {()=><TodoListContainer />}
  </Provider>,
  document.getElementById('container')
);
