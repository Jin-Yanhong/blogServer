// global router
const express = require('express');
const router = express.Router();
const { errorType } = require('./consts.js');
const Redis = require('../config/redis');
// 开启跨域访问
const blogRouter = router.use(function (req, res, next) {
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

/**
 *
 * @param { Promise } reqPromise 请求任务
 * @param { Object } responseBody responseBody
 */
function handleRequest(reqPromise, responseBody, callback) {
	reqPromise
		.then((data) => {
			if (callback) {
				callback(data);
			} else {
				responseBody.send({
					msg: 'success',
					code: 200,
					data: data,
				});
			}
		})
		.catch((err) => {
			responseBody.send({
				msg: err.message,
				code: 200,
				data: {},
			});
		});
}

/**
 *
 * @param { string } key errorType
 * @param { responseBody } responseBody responseBody
 */
function handleRequestError(key, responseBody) {
	switch (key) {
		case errorType.params_in:
			responseBody.send({
				msg: '入参错误',
				code: 200,
				data: {},
			});
			break;

		case errorType.params_out:
			responseBody.send({
				msg: '出参错误',
				code: 200,
				data: {},
			});
			break;

		default:
			break;
	}
}

const redisFunction = {
	ping: 'ping',
	get: 'get',
	incr: 'incr',
	set: 'set',
};

/**
 *
 * @param { string } caseKey redis方法名称  ping | get | incr | set
 * @param { function } callback 成功回调
 * @param { object } argsObject redis方法所需参数
 */
function handleRedisFunction(caseKey, callback, { key, value } = argsObject) {
	switch (caseKey) {
		case redisFunction.ping:
			Redis.ping()
				.then((result) => {
					callback(result);
				})
				.catch((err) => {
					console.log(`${caseKey} error`, err);
				});
			break;
		case redisFunction.get:
			Redis.get(key)
				.then((result) => {
					callback(result);
				})
				.catch((err) => {
					console.log(`${caseKey} error`, err);
				});
			break;
		case redisFunction.incr:
			Redis.incr(key)
				.then((result) => {
					callback(result);
				})
				.catch((err) => {
					console.log(`${caseKey} error`, err);
				});
			break;
		case redisFunction.set:
			Redis.set(`${key}`, JSON.stringify(value))
				.then((result) => {
					callback(result);
				})
				.catch((err) => {
					console.log(`${caseKey} error`, err);
				});
			break;
		default:
			new Promise((resolve, reject) => {
				resolve({});
			})
				.then((result) => {
					callback(result);
				})
				.catch((err) => {
					console.log(`${caseKey} error`, err);
				});
			break;
	}
}

// 部分导出错误处理
module.exports = {
	blogRouter,
	redisFunction,
	handleRedisFunction,
	handleRequest,
	handleRequestError,
};
