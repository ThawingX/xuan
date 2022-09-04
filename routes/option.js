const express = require('express');
const router = express.Router();

/* get option list */
router.get('/list', require('../method/option/getListByName'));

/* create option. */
router.post('/', require('../method/option/create'));

/* delete option */
router.delete('/',require('../method/option/delete'));

module.exports = router;
