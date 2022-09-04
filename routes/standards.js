const express = require('express');
const router = express.Router();
const { Standard } = require('../schema/standards');
const { options } = require('./option');

/* get standards by id. */
router.get('/', function (req, res, next) {
    res.send('get standards by id');
});

/* get standards by id. */
router.get('/key', function (req, res, next) {
    res.send('get standards by key');
});

/* get standards by search. */
router.get('/search', function (req, res, next) {
    res.send('get standards by search');
});

/* create standards. */
router.post('/', function (req, res, next) {
    res.send('create standards.');
});

/* delete standards by id. */
router.delete('/', function (req, res, next) {
    res.send('delete standards by id');
});

/* update standards by id. */
router.put('/', function (req, res, next) {
    res.send('update standards by id');
});

/* get standards list. */
router.get('/list', async function (req, res, next) {
    try {
        const result = await Standard.find({}).limit(20)
        res.json(result)
    } catch (err) {
        res.send(err)
    } finally {
    }
});

/* upload standards. */
router.post('/upload', function (req, res, next) {
    res.send('upload standards.');
});

/* upload standards. */
router.get('/download', function (req, res, next) {
    res.send('download standards.');
});

module.exports = router;
