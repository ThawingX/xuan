const  express = require('express');
const  router = express.Router();

/* get user by id */
router.get('/', function(req, res, next) {
  res.send('get user by id');
});

/* get user list */
router.get('/list', function(req, res, next) {
  res.send('get user blist');
});

/* delete user by id */
router.delete('/', function(req, res, next) {
  res.send('delete user by id');
});

/* create user */
router.post('/', function(req, res, next) {
  res.send('create user');
});

/* update user by id */
router.put('/', function(req, res, next) {
  res.send('update user');
});

/* review applied user by id */
router.post('/review', function(req, res, next) {
  res.send('review applied user');
});

/* apply for user */
router.post('/apply', function(req, res, next) {
  res.send('apply for user');
});

module.exports = router;
