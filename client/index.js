'use strict';

import React from 'react';
import create from '../app/modules/redux';
import { Provider } from 'redux/react';
import TodoListContainer from './../app/modules/components/todoListContainer.js';
import TodoStore from './../app/modules/stores/todos';

const initialState = window.__data;
const redux = create({ todos: TodoStore }, initialState);

React.render(
  <Provider redux={redux}>
    {()=><TodoListContainer />}
  </Provider>,
  document.getElementById('container')
);
