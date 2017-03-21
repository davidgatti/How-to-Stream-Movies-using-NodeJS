'use strict';

const express = require('express');

const router  = express.Router();

router.get('/', (req, res, next) => {

	//
	//	->	Display the index view with the video tag
	//
	res.render('index', {
		base_url: process.env.BASE_URL
	});

});

module.exports = router;
