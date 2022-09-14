const { errorType } = require('../utils/constant');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');
const { queryArticleById, createArticle, getArticleList, updateArticle, deleteArticleById } = require('../controller/article');

// 获取文章列表
blogRouter.put('/getArticleList', function (req, res) {
	let { article } = req.body;
	if (article) {
		handleRequest(createArticle(article), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 获取文章列表
blogRouter.get('/getArticleList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getArticleList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 查询文章详情
blogRouter.get('/getArticleContent/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(queryArticleById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 更新文章
blogRouter.post('/updateArticle/:id', function (req, res) {
	let { id } = req.params;
	let { article } = req.body;
	if (id && article) {
		handleRequest(updateArticle(id, article), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 删除文章
blogRouter.delete('/updateArticle/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(deleteArticleById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
