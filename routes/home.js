const { blogRouter, handleRequest } = require('../utils/index');

const { getSkillsList } = require('../controller/skills');

// 获取工作技能
blogRouter.get('/getSkillsList', function (req, res) {
	handleRequest(getSkillsList(), res);
});

module.exports = blogRouter;
