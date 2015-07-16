'use strict';

let state = {
  items: []
};
const api = (router) => {
  return (req, res) => {
    const route = router.getRoute(req.url, {method: req.method});

    if (route) {
      state.items.push({text: req.body.text});
      res.send(JSON.stringify(state));
    }
    else {
      res.send(404, '[Route not found]');
    }
  };
};

export default api;
