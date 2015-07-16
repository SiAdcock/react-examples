'use strict';

import Express from 'express';
import path from 'path';
import render from './render';
import Router from 'routr';
import create from './../app/modules/redux';
import addTodo from '../app/modules/actions/add';
import TodoStore from './../app/modules/stores/todos';

const app = new Express();
const router = new Router({
  'view_user': {
    path: '/user/:id',
    method: 'get',
    foo: {
      bar: 'baz'
    }
  }
});

app.use('/build', Express.static(path.join(process.cwd(), 'build')));
app.use('/api', (req, res) => {
  const route = router.getRoute(req.url, {method: req.method});

  if (route) {
    redux.dispatch(addTodo('New thing'));
    const html = render(redux);
    res.send(html);
  }
  else {
    res.send(404, '[Route not found]');
  }
});
app.use((req, res) => {
  const redux = create({todos: TodoStore});
  const html = render(redux);
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
