'use strict';

import koa from 'koa';
import serve from 'koa-static';
import log from '../lib/logging/index';
import api from './api';
import render from './render';
import create from './../app/modules/redux';
import * as reducers from '../app/modules/reducers/index';
import { get } from './../app/modules/actions/index'

let app = koa();

app.use(serve('build'));
app.use(api());
app.use(function *() {
  const store = create(reducers);
  console.log('1.');
  //yield store.dispatch(get());
  const html = render(store);
  console.log('4.');
  this.body = html;
});
app.listen(8080);
log.info('Web server listening on port 8080');

export default app;
