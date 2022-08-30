const { blogRouter, handleRequest } = require('../utils/index');

const { getSkillsList } = require('../controller/skills');

/**
 * @api {get} /home/getSkillsList getSkillsList
 * @apiName getSkillsList
 * @apiGroup Home
 * @apiSuccessExample Success-Response:
 *     {
 *       "message": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

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
