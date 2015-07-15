'use strict';

import React from 'react';
import htmlComponent from '../app/modules/index';
import TodoListContainer from '../app/modules/components/todoListContainer';

const render = () => {
  const markup = React.renderToString(<TodoListContainer/>);
  const props = {
    dehydratedState: {},
    markup: markup
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
