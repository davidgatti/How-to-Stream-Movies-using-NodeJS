'use strict';

const path       = require('path');
const logger     = require('morgan');
const express    = require('express');
const bodyParser = require('body-parser');

const app        = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

//
//	Check for HTTPS
//
app.use(force_https);

//
//	Expose the public folder to the world
//
app.use(express.static(path.join(__dirname, 'public')));

//
//	Remove the information about what type of framework is the site running on
//
app.disable('x-powered-by');

//
// HTTP request logger middleware for node.js
//
app.use(logger('dev'));

//
//	Parse all request as regular text, and not JSON objects
//
app.use(bodyParser.json());

//
//	Parse application/x-www-form-urlencoded
//
app.use(bodyParser.urlencoded({ extended: false }));

//////////////////////////////////////////////////////////////////////////////

app.use('/', require('./routes/index'));
app.use('/video', require('./routes/video'));

//////////////////////////////////////////////////////////////////////////////

//
//
//  If nonce of the above routes matches, we create an error to let the
//  user know that the URL accessed doesn't match anything.
//
app.use((req, res, next) => {

	let err = new Error('Not Found');
		err.status = 404;

	next(err);

});

//
//  Display any error that occurred during the request.
//
app.use((err, req, res, next) => {

	//
	//	1.	Set the basic information about the error, that is going to be
	//		displayed to user and developers regardless.
	//
	let obj_message = {
		message: err.message
	};

	//
	//	2.	Check if the environment is development, and if it is we
	//		will display the stack-trace
	//
	if(process.env.NODE_ENV === 'development')
	{
		//
		//	1.	Set the variable to show the stack-trace to the developer
		//
		obj_message.error = err;

		//
		//	-> Show the error in the console
		//
		console.error(err);
	}

	//
	//	3.	Display a default status error, or pass the one from
	//		the error message
	//
	res.status(err.status || 500);

	//
	//	->	Show the error
	//
	res.json(obj_message);

});

//   _    _ ______ _      _____  ______ _____   _____
//  | |  | |  ____| |    |  __ \|  ____|  __ \ / ____|
//  | |__| | |__  | |    | |__) | |__  | |__) | (___
//  |  __  |  __| | |    |  ___/|  __| |  _  / \___ \
//  | |  | | |____| |____| |    | |____| | \ \ ____) |
//  |_|  |_|______|______|_|    |______|_|  \_\_____/
//

//
//	Check if the connection is secure, if not, redirect to a secure one.
//
function force_https(req, res, next)
{
	//
	//	1. 	Redirect only in the production environment
	//
	if(process.env.NODE_ENV === 'production')
	{
		//
		//	1. 	Check what protocol are we using
		//
		if(req.headers['x-forwarded-proto'] !== 'https')
		{
			//
			//	-> 	Redirect the user to the same URL that he requested, but
			//		with HTTPS instead of HTTP
			//
			return res.redirect('https://' + req.get('host') + req.url);
		}
	}

	//
	//	2. 	If the protocol is already HTTPS the, we just keep going.
	//
	next();
}

module.exports = app;
