// global router
const express = require('express');
const router = express.Router();
const { errorType } = require('./consts.js');
// 开启跨域访问
const blogRouter = router.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

/**
 *
 * @param { Promise } reqPromise 请求任务
 * @param { Object } responseBody responseBody
 */
function handleRequest(reqPromise, responseBody) {
	reqPromise
		.then(data => {
			responseBody.send({
				msg: 'success',
				code: 200,
				data: data,
			});
		})
		.catch(err => {
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

// 部分导出错误处理
module.exports = {
	blogRouter,
	handleRequest,
	handleRequestError,
};
