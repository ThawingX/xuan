const  express = require('express');
const  router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '标准中心后端主页' });
});

/* get menu. */
router.get('/getRoute', function (req, res, next) {
  res.send('get menu')
});

/* get userInfo. */
router.get('/getUserinfo', function (req, res, next) {
  res.send('get userInfo')
});

/* check login state. */
router.post('/checkLogin', function (req, res, next) {
  res.send('check login state')
});

/* check login state. */
router.get('/checkLogin', function (req, res, next) {
  res.send('check login state')
});


module.exports = router;
