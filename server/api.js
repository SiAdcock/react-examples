'use strict';

const api = (router) => {
  return (req, res) => {
    const route = router.getRoute(req.url, {method: req.method});

    if (route) {
      res.send('New thing added');
    }
    else {
      res.send(404, '[Route not found]');
    }
  };
};

export default api;
