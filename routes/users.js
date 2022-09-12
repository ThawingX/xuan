const express = require('express');
const router = express.Router();


/* get user by id */
router.get('/', require('../method/users/getById'));

/* get user list */
router.get('/list', require('../method/users/getList'));

/* delete user by id */
router.delete('/', require('../method/users/delete'));

/* create user */
router.post('/', require('../method/users/createUser'));

/* login by userInfo */
router.post('/login', require('../method/users/login'));

/* update user by id */
router.put('/', require('../method/users/update'));

/* review applied user by id */
router.post('/review', require('../method/users/reviewAppliedAccount'));

/* review applied user by id */
router.get('/review', require('../method/users/getAppliedList'));

/* apply for user */
router.post('/apply', require('../method/users/applyForAccount'));

/* recallPwd  */
router.post('/recallPwd', require('../method/users/recallPwd'));

module.exports = router;
