'use strict';

import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import TodoStore from '../app/modules/stores/todos';
import htmlComponent from '../app/modules/index';
import TodoListContainer from '../app/modules/components/todoListContainer';

const render = () => {
  const redux = createRedux({todos: TodoStore});
  const markup = React.renderToString(
    <Provider redux={redux}>
      {()=><TodoListContainer/>}
    </Provider>
  );
  const props = {
    dehydratedState: redux.getState(),
    markup: markup
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
