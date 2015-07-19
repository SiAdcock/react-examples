'use strict';

import Express from 'express';
import bodyParser from 'body-parser';
import Router from 'routr';
import path from 'path';
import api from './api';
import render from './render';
import routes from './routes';
import create from './../app/modules/redux';
import * as reducers from '../app/modules/reducers/index';
import { get } from './../app/modules/actions/index';

const app = new Express();
let router = new Router(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/build', Express.static(path.join(process.cwd(), 'build')));
app.use('/api', api(router));
app.use((req, res) => {
  const store = create(reducers);
  store.dispatch(get());
  const html = render(store);
  res.send(html);
});
app.listen(8080, (err) => {
  if (err) {
    console.err(err);
  }
  else {
    console.log('web server listening on port 8080');
  }
});

export default app;
