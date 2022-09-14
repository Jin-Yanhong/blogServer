const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');
const { errorType } = require('../utils/constant');
const { getSkillsList, createSkill, updateSkill, deleteSkillById } = require('../controller/skills');

// 获取工作技能列表
blogRouter.get('/getSkillsList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getSkillsList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 创建技能
blogRouter.put('/createSkill', function (req, res) {
	let { skill } = req.body;
	if (skill) {
		handleRequest(createSkill(skill), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 更新技能
blogRouter.post('/updateSkill/:id', function (req, res) {
	let { id } = req.params;
	let { skill } = req.body;
	if (id && skill) {
		handleRequest(updateSkill(id, skill), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 删除工作技能
blogRouter.delete('/deleteSkill/:id', function (req, res) {
	let { id } = req.params;
	if (id) {
		handleRequest(deleteSkillById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
