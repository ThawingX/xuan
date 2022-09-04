const express = require('express');
const router = express.Router();

/* get option list */
router.get('/list', require('../method/option/getListByName'));

/* create option. */
router.post('/', require('../method/option/createOption'));

/* delete option */
router.delete('/', function (req, res, next) {
    res.send('delete option');
});

module.exports = router;
