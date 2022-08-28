const { blogRouter, handleRequest } = require('../utils/index');

const {
	getSystemConfigList,
	createSystemConfig,
} = require('../controller/systemConfigs');

const { getSkillsList } = require('../controller/skills');

// 获取系统配置
blogRouter.get('/getSystemConfig', function (req, res) {
	handleRequest(getSystemConfigList(), res, function (result) {
		let { copyright, contactInfo, _id: id } = result;
		res.send({
			msg: 'success',
			code: 200,
			data: {
				id,
				copyright,
				contactInfo,
			},
		});
	});
});

// 获取工作技能
blogRouter.get('/getSkillsList', function (req, res) {
	handleRequest(getSkillsList(), res, function (result) {
		let list = result.sort((a, b) => a.index - b.index);
		res.send({
			msg: 'success',
			code: 200,
			data: list,
		});
	});
});

module.exports = blogRouter;
