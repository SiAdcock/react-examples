'use strict';

import React from 'react';
import { createRedux } from 'redux';
import AppStore from '../app/modules/appStore';
import htmlComponent from '../app/modules/index';
import NamesComponent from '../app/modules/randomNames.js';

const render = () => {
  const redux = createRedux({appStore: AppStore});
  const props = {
    dehydratedState: redux.getState(),
    markup: React.renderToString(React.createElement(NamesComponent))
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
