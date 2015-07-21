'use strict';

import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import favicon from 'koa-favicon';
import log from '../lib/logging/index';
import api from './api';
import render from './render';
import create from './../app/modules/redux';
import * as reducers from '../app/modules/reducers/index';
import { get } from './../app/modules/actions/index';

let app = koa();

app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});
app.use(favicon('favicon.ico'));
app.use(mount('/build', serve('build')));
app.use(mount('/api', api()));
app.use(mount('/', function *() {
    const store = create(reducers);
    console.log('1.');
    yield store.dispatch(get());
    const html = render(store);
    console.log('4.');
    this.body = html;
  })
);
app.use(function *(next) {
  console.log(2.4);
  
  next();
});
app.listen(8080);
log.info('Web server listening on port 8080');

export default app;
