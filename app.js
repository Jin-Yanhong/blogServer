const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongooseIns = require('./config/mongoDB');
// const Redis = require('./config/redis');

// App routers
const articleRouter = require('./routes/article');
const dictRouter = require('./routes/dict');
const footPrintRouter = require('./routes/footPrint');
const skillsRouter = require('./routes/skills');
const linksRouter = require('./routes/links');
const workRouter = require('./routes/work');
const systemRouter = require('./routes/system');
const userRouter = require('./routes/user');
const filesRouter = require('./routes/files');
const wxRouter = require('./routes/wx');

const app = express();

app.set('trust proxy', 1); // trust first proxy
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);

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
app.use('/api/dict', dictRouter);
app.use('/api/footPrint', footPrintRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/links', linksRouter);
app.use('/api/work', workRouter);
app.use('/api/system', systemRouter);
app.use('/api/user', userRouter);
app.use('/api/files', filesRouter);
app.use('/api/wx', wxRouter);

dotenv.config();

// catch 404 and forward to error handler
app.use(function (req, res) {
    res.status(404).send({
        data: {},
        code: 404,
        message: 'Are you sure that the path ** ' + req.url + ' ** is exist ?',
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
