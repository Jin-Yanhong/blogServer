const { errorType } = require('../utils/consts');
const { getArticleList, queryArticleById } = require('../controller/article');
const {
	blogRouter,
	handleRequest,
	handleRequestError,
} = require('../utils/index');

/**
 * @api {get} /article/getArticleList?pageSize=10&pageNum=1 getArticleList
 * @apiName getArticleList
 * @apiGroup Article
 * @apiQuery {Number} pageSize pageSize
 * @apiQuery {Number} pageNum pageNum
 * @apiSuccessExample Success-Response:
 *     {
 *       "message": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

// 获取文章列表
blogRouter.get('/getArticleList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getArticleList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

/**
 * @api {get} /article/getArticleContentById/:id getArticleContentById
 * @apiName getArticleContentById
 * @apiGroup Article
 * @apiParam {String} id Article unique ID
 * @apiSuccessExample Success-Response:
 *     {
 *       "message": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

// 根据文章 id 查询文章详情
blogRouter.get('/getArticleContentById/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(queryArticleById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
