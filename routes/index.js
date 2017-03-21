'use strict';

const express = require('express');

const router  = express.Router();

router.get('/', function(req, res, next) {
	
	//
	//	->	Display the index view with the video tag
	//
	res.render('index', {
		base_url: process.env.BASE_URL
	});

});

module.exports = router;
