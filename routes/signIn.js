const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('signIn', { title: 'Login Page' });
});

module.exports = router;