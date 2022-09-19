const { centerRouter, handleRequest } = require('../utils/index');
const { queryArticleById, createArticle, getArticleList, updateArticle, deleteArticleById } = require('../controller/article');
const jwtUtils = require('../middleware/jwt');
// 新增文章
centerRouter.put(
	'/createArticle',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { article } = req.body;
		handleRequest(createArticle(article), res, { article });
	}
);

// 获取文章列表
centerRouter.get('/getArticleList', function (req, res, next) {
	let { pageSize, pageNum } = req.query;
	handleRequest(getArticleList(pageSize, pageNum), res, { args: { pageSize, pageNum } });
});

// 查询文章详情
centerRouter.get('/getArticleContent/:id', function (req, res) {
	let id = req?.params?.id;
	handleRequest(queryArticleById(id), res, { args: { id } });
});

// 更新文章
centerRouter.post(
	'/updateArticle/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { id } = req.params;
		let { article } = req.body;
		handleRequest(updateArticle(id, article), res, { args: { id, article } });
	}
);

// 删除文章
centerRouter.delete(
	'/deleteArticle/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let id = req?.params?.id;
		handleRequest(deleteArticleById(id), res, { args: { id } });
	}
);

module.exports = centerRouter;
