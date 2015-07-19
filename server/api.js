'use strict';

import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import route from 'koa-route';
import compose from 'koa-compose';

let nextId = 1000;
let state = {
  items: [{
    id: ++nextId,
    text: 'Default Item'
  }]
};
const app = koa();

app.use(bodyparser());
app.use(route.get('/api/'), function* () {
  this.body = JSON.stringify(state);
});
app.use(route.post('/add'), function* (req) {
  let item = {
    text: req.body.text,
    id: ++nextId
  };

  state.items.push(item);
  this.body = JSON.stringify(item);
});

export default function() {
  return compose(app.middleware);
};
