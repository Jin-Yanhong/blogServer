const { errorType } = require('../utils/consts');
const { getArticleList, queryArticleById } = require('../controller/article');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');

// 获取文章列表
blogRouter.get('/getArticleList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getArticleList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 根据文章 id 查询文章详情
blogRouter.get('/getArticleContent', function (req, res) {
	let id = req?.query?.id;
	if (id) {
		handleRequest(queryArticleById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
