var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	if (req.url === '/home') {
		res.end("Home");
	} else {
		next();
	}
});

app.use(function (req, res, next) {
	if (url.parse(req.url).pathname === '/forbidden' && checkAccess(req)) {
		 res.send('Access approved');
	} else {
		 res.send('Access denied');
	}
});

function checkAccess(req) {
	return url.parse(req.url, true).query.secret === 'true';
}
 
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
