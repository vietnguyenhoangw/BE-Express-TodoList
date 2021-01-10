const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/auth');

router.route('/login')
    .post(authController.loginEmail);

module.exports = router;
