var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/ws-client', function(req, res) {
  res.render('ws-client', { title: 'Express' });
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
