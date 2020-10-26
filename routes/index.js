const express = require('express'),
	router = express.Router(),
	indexController = require('../controllers');

router.route('/')
	.get(indexController.dashboard);

router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));	

module.exports = router;
