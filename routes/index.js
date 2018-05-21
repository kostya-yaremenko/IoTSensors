var express     = require('express');
var path        = require('path');
var router      = express.Router();
var db          = require('../queries');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '..', 'views/index.html'));
// });


router.get('/api/devices', db.getAllDevices);
router.get('/api/sensors/:id', db.getSingleDevice);
router.post('/api/sensors', db.createDevice);
router.put('/api/sensors/:id', db.updateDevice);
router.delete('/api/sensors/:id', db.removeDevice);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

  res.render('index', {title: 'node-postgres-promises'});
});

module.exports = router;
