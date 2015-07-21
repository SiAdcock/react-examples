'use strict';

import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import koaRouter from 'koa-router';
import compose from 'koa-compose';

let nextId = 1000;
let state = {
  items: [{
    id: ++nextId,
    text: 'Default Item'
  }]
};

const router = koaRouter().get('/', function* () {
    this.body = JSON.stringify(state);
  })
  .post('/add', function* () {
    let text = this.request.body;
    let item = {
      text: text,
      id: ++nextId
    };

    state.items.push(item);
    this.body = JSON.stringify(item);
  }
);

const app = koa();

app.use(bodyparser())
  .use(router.routes());

export default function() {
  return compose(app.middleware);
}
