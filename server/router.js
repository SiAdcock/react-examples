import Router from 'routr';

export default new Router({
  'view_user': {
    path: '/user/:id',
    method: 'get',
    foo: {
      bar: 'baz'
    }
  }
});
