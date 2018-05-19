var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signin', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

module.exports = router;
