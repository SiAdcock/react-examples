'use strict';

import React from 'react';
import { createRedux } from 'redux';
import AppStore from '../app/modules/stores/appStore';
import htmlComponent from '../app/modules/index';
import TodoListContainer from '../app/modules/components/todoListContainer.js';

const render = () => {
  const redux = createRedux({appStore: AppStore});
  const props = {
    dehydratedState: redux.getState(),
    markup: React.renderToString(React.createElement(TodoListContainer))
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
