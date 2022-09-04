const  express = require('express');
const  router = express.Router();

/* get detectItem by id*/
router.get('/', function(req, res, next) {
  res.send('get detectItem by id');
});

/* delete detectItem by id */
router.delete('/', function(req, res, next) {
  res.send('delete detectItem by id');
});

/* create detectItem */
router.post('/', function(req, res, next) {
  res.send('create detectItem');
});

/* update detectItem by id */
router.put('/', function(req, res, next) {
  res.send('update detectItem');
});

module.exports = router;
