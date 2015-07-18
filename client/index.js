'use strict';

import React from 'react';
import create from '../app/modules/redux';
import { Provider } from 'redux/react';
import TodoListContainer from './../app/modules/components/todoListContainer.js';
import TodoStore from './../app/modules/stores/todos';

const initialState = window.__data;
const store = create({ todos: TodoStore }, initialState);

React.render(
  <Provider store={store}>
    {()=><TodoListContainer />}
  </Provider>,
  document.getElementById('container')
);
