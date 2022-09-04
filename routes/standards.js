const express = require('express');
const router = express.Router();
const { standardModel } = require('../schema/standards');

/* get standards by id. */
router.get('/', require('../method/standards/getById'));

/* get standards by id. */
router.get('/key', require('../method/standards/getByKey'));

/* get standards by search. */
router.get('/search', require('../method/standards/getBySearch'));

/* create standards. */
router.post('/', require('../method/standards/create'));

/* delete standards by id. */
router.delete('/', require('../method/standards/delete'));

/* update standards by id. */
router.put('/', require('../method/standards/update'));

/* get standards list. */
router.get('/list', require('../method/standards/getList'));

/* upload standards. */
router.post('/upload', function (req, res, next) {
    res.send('upload standards.');
});

/* upload standards. */
router.get('/download', function (req, res, next) {
    res.send('download standards.');
});

module.exports = router;
