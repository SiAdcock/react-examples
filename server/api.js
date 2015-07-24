'use strict';

import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import koaRouter from 'koa-router';
import compose from 'koa-compose';

let nextId = 1000;
let state = {
  todos: [{
    id: ++nextId,
    text: 'Default Item'
  }]
};

const router = koaRouter()
  .post('/add', function *() {
    let body = this.request.body;
    let todo = {
      text: body.text,
      id: ++nextId
    };

    state.todos.push(todo);
    this.body = JSON.stringify(todo);
  })
  .get('/', function *() {
    this.body = JSON.stringify(state.todos);
  });

const app = koa();

app.use(bodyparser())
  .use(router.routes());

export default function() {
  return compose(app.middleware);
}
