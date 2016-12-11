let express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {

	//
	//	->	Display the index view with the video tag
	//
	res.render("index");

});

module.exports = router;
