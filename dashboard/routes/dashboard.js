var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile('C:/Users/Jason/Downloads/bootstrap-5.2.2-examples/bootstrap-5.2.2-examples/dashboard/public/index.html', { title: 'Express' });
});

module.exports = router;
