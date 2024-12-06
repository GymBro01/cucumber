const express = require('express');
const router = express.Router();

const registrationRoutes = require('./signUp');
const loginRoutes = require('./signIn');
const homeRoutes = require('./home');

router.use('/signUp', registrationRoutes);
router.use('/signIn', loginRoutes);
router.use('/', homeRoutes);

module.exports = router;