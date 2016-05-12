var express = require('express');
var router  = express.Router();

class Resource {
  get(endpoint: string, action: (req, res) => void) {
    return router.get(endpoint, action);
  }
  post(endpoint: string = '', action: (req, res) => void) {
    return router.post(endpoint, action);
  }
  patch(endpoint: string = '', action: (req, res) => void) {
    return router.patch(endpoint, action);
  }
  put(endpoint: string = '', action: (req, res) => void) {
    return router.put(endpoint, action);
  }
  delete(endpoint: string = '', action: (req, res) => void) {
    return router.delete(endpoint, action);
  }
}

export Resource;