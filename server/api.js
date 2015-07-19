'use strict';

let nextId = 1000;
let state = {
  items: [{
    id: ++nextId,
    text: 'Default Item'
  }]
};
const api = (router) => {
  return (req, res) => {
    const route = router.getRoute(req.url, {method: req.method});
    let item;

    if (route.url === '/add') {
      item = {
        text: req.body.text,
        id: ++nextId
      };
      state.items.push(item);
      res.send(JSON.stringify(item));
    }
    else {
      res.send(404, '[Route not found]');
    }
  };
};

export default api;
