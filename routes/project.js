const { errorType } = require('../utils/consts');
const { getProjectList, queryProjectById } = require('../controller/project');
const {
	blogRouter,
	handleRequest,
	handleRequestError,
} = require('../utils/index');

/**
 * @api {get} /project/getProjectList?pageSize=10&pageNum=1 getProjectList
 * @apiName getProjectList
 * @apiGroup Project
 * @apiQuery {Number} pageSize pageSize
 * @apiQuery {Number} pageNum pageNum
 * @apiSuccessExample Success-Response:
 *     {
 *       "msg": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */
blogRouter.get('/getProjectList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getProjectList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

/**
 * @api {get} /project/getProjectDetail/:id getProjectDetail
 * @apiName getProjectDetail
 * @apiGroup Project
 * @apiParam {String} id Project unique ID
 * @apiSuccessExample Success-Response:
 *     {
 *       "msg": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

// 获取项目详情
blogRouter.get('/getProjectDetail/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(queryProjectById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
