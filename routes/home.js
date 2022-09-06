const { blogRouter, handleRequest } = require('../utils/index');

const { getSkillsList } = require('../controller/skills');

/**
 * @api {get} /home/getSkillsList getSkillsList
 * @apiName getSkillsList
 * @apiGroup Home
 * @apiSuccessExample Success-Response:
 *     {
 *       "msg": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

// 获取工作技能
blogRouter.get('/getSkillsList', function (req, res) {
	handleRequest(getSkillsList(), res);
});

module.exports = blogRouter;
