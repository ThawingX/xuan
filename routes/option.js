const  express = require('express');
const  router = express.Router();

/* get option list */
router.get('/list', function (req, res, next) {
    res.send('get standards list');
});

/* create option. */
router.post('/', function (req, res, next) {
    res.send('create option.');
});

/* delete option */
router.delete('/', function (req, res, next) {
    res.send('delete option');
});

module.exports = router;
