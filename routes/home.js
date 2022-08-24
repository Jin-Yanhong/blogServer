const axios = require('axios');
const { errorType } = require('../utils/consts');
const { blogRouter, handleRequest, handleRedisFunction, redisFunction, handleRequestError } = require('../utils/index');

const { getSystemConfigList } = require('../controller/systemConfigs');

// 获取系统配置
blogRouter.get('/getSystemConfig', function (req, res) {
	handleRedisFunction(
		redisFunction.get,
		function (result) {
			console.log(result);
			if (result) {
				res.send({
					msg: 'success',
					code: 200,
					data: result,
				});
			} else {
				handleRequest(getSystemConfigList(), res);
			}
		},
		{ key: redisFunction.get }
	);
});

//
module.exports = blogRouter;
