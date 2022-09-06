const express = require('express');
const router = express.Router();

/* get detectItem by id*/
router.get('/', require('../method/detectItem/getById'));

/* delete detectItem by detectItem name */
router.delete('/', function (req, res, next) {
  res.send('delete detectItem by id');
});

/* delete detectItem All*/
router.delete('/all', require('../method/detectItem/deleteAll'));

/* create detectItem */
router.post('/', require('../method/detectItem/create'));

/* update detectItem by id */
router.put('/', function (req, res, next) {
  res.send('update detectItem');
});

module.exports = router;
