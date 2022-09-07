const {
	blogRouter,
	handleRequest,
	handleRedisFunction,
} = require('../utils/index');

const {
	getSystemConfigList,
	updateSystemConfig,
} = require('../controller/systemConfigs');

// 获取系统配置
blogRouter.get('/getSystemConfig', function (req, res) {
	handleRequest(getSystemConfigList(), res, function (result) {
		let { copyright, contactInfo, lanLong } = result;
		res.send({
			msg: 'success',
			code: 200,
			data: {
				copyright,
				contactInfo,
				lanLong,
			},
		});
	});
});

// 获取系统配置
blogRouter.post('/updateSystemConfig/:id', function (req, res) {
	let docs = req.body;
	let id = req.params;
	handleRequest(updateSystemConfig(id, docs), res);
});

module.exports = blogRouter;
