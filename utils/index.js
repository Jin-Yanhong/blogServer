const { errorType } = require('./consts.js');

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
 * @param {*} responseBody responseBody
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
	handleRequest,
	handleRequestError,
};
