const { centerRouter, handleRequest } = require('../utils/index');
const { getSkillsList, createSkill, updateSkill, deleteSkillById } = require('../controller/skills');
const jwtUtils = require('../middleware/jwt');

// 创建技能
centerRouter.put(
	'/createSkill',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { skill } = req.body;
		handleRequest(createSkill(skill), res, { args: { skill } });
	}
);

// 删除工作技能
centerRouter.delete(
	'/deleteSkill/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { id } = req.params;
		handleRequest(deleteSkillById(id), res, { args: { id } });
	}
);

// 更新技能
centerRouter.post(
	'/updateSkill/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { id } = req.params;
		let { skill } = req.body;
		handleRequest(updateSkill(id, skill), res, { args: { id, skill } });
	}
);

// 获取工作技能列表
centerRouter.get('/getSkillsList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	handleRequest(getSkillsList(pageSize, pageNum), res, { args: { pageSize, pageNum } });
});

module.exports = centerRouter;
