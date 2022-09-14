const {
	blogRouter,
	handleRequest,
	// handleRedisFunction,
} = require('../utils/index');

const {
	getSystemConfigList,
	updateSystemConfig,
} = require('../controller/systemConfigs');

// 获取系统配置
blogRouter.post('/getSystemConfig', function (req, res) {
	let condition = req.body;
	handleRequest(getSystemConfigList(condition), res);
});

// 获取系统配置
blogRouter.post('/updateSystemConfig/:id', function (req, res) {
	let docs = req.body;
	let id = req.params;
	// TODO: 多个配置只允许有一个当前正在使用的配置项 isActive == true
	handleRequest(updateSystemConfig(id, docs), res);
});

module.exports = blogRouter;
