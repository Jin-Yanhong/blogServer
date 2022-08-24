const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Mongoose = require('./config/mongoDB');
const Redis = require('./config/redis');
const { handleRedisFunction, redisFunction } = require('./utils/index');
const { sysConfig } = require('./config/appConfig');

// 应用路由
const articleRouter = require('./routes/article');
const footPrintRouter = require('./routes/footPrint');
const homeRouter = require('./routes/home');
const linksRouter = require('./routes/links');
const projectRouter = require('./routes/project');
const systemRouter = require('./routes/system');

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
app.use('/api/article', articleRouter);
app.use('/api/footPrint', footPrintRouter);
app.use('/api/home', homeRouter);
app.use('/api/links', linksRouter);
app.use('/api/project', projectRouter);
app.use('/api/system', systemRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	res.status(404).send({
		data: {},
		code: 404,
		message: 'Are you sure that the path ** ' + req.url + ' ** is exist ?',
	});
});

Mongoose.connect();

Redis.connect()
	.then(() => {
		console.log('Redis connection succeeded');
		handleRedisFunction(
			redisFunction.set,
			(result) => console.log('system config initialized successfully'),
			{ key: 'sysConfig', value: sysConfig }
		);
	})
	.catch((err) => {
		console.log('Redis connection failed', err);
	});

// error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500).send({
		data: {},
		code: err.status || 500,
		message: err.message,
	});
});

module.exports = app;
