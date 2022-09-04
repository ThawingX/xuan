const express = require('express');
const router = express.Router();

/* create role */
router.post('/', require('../method/role/create'));

/* update role */
router.put('/', require('../method/role/update'));

/* delete role */
router.delete('/', require('../method/role/delete'));

module.exports = router;
