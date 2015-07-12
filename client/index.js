import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import TodoListContainer from './../app/modules/todoListContainer.js';
import AppStore from './../app/modules/appStore';

const initialState = window.__data;
const redux = createRedux({ appStore: AppStore }, initialState);

React.render(
  <Provider redux={redux}>
    {()=><TodoListContainer />}
  </Provider>,
  document.getElementById('container')
);
