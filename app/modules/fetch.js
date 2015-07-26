'use strict';

import 'isomorphic-fetch';
import _ from 'lodash';

const methods = ['get', 'post'];

methods.forEach(function(method){
  exports[method] = function (path, options) {
    const url = __SERVER__ ? `http://localhost:8080${path}` : path;
    return fetch(url, _.extend({method}, options)).then(res => res.json());
  };
});
