'use strict';

import React from 'react';
import htmlComponent from '../app/modules/index';

const render = () => {
  const markup = React.renderToString(<div>Hello</div>);
  const props = {
    dehydratedState: {},
    markup: markup
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
