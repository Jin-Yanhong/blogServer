const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongooseIns = require('./config/mongoDB');
// const Redis = require('./config/redis');

// App routers
const Auth = require('./routes/auth');
const Dict = require('./routes/dict');
const File = require('./routes/files');
const User = require('./routes/user');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// when it is visited ,use the flowing router
app.use('/api', Auth);
app.use('/api', Dict);
app.use('/api', File);
app.use('/api', User);

dotenv.config();

// catch 404 and forward to error handler
app.use(function (req, res) {
	res.status(404).send({
		data: {},
		code: 404,
		message: {
			url: req.url,
			method: req.method,
			result: 'No path matched this request',
		},
	});
});

// Handle MongoDB Service Connection
mongooseIns.connect();
// Handle Redis Service Connection

/* 
Redis.connect()
	.then(() => {
		console.log('Redis connection succeeded');
	})
	.catch((err) => {
		console.log('Redis connection failed', err);
	});
*/

// error handler
app.use(function (err, req, res) {
	res.status(err.status || 500).send({
		data: {},
		code: err.status || 500,
		message: err.message,
	});
});

module.exports = app;
