var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongooseIns = require('./config/mongoDB');
// var Redis = require('./config/redis');

// App routers
var sysAuth = require('./routes/sys_auth');
var sysConfig = require('./routes/sys_config');
var sysDict = require('./routes/sys_dict');
var sysFiles = require('./routes/sys_files');
var sysUser = require('./routes/sys_user');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// when it is visited ,use the flowing router
app.use('/api/auth', sysAuth);
app.use('/api/sys', sysConfig);
app.use('/api/sys', sysDict);
app.use('/api/sys', sysFiles);
app.use('/api/sys', sysUser);

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

