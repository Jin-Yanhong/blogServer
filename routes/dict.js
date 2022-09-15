const { errorType } = require('../utils/constant');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');
const { queryDictById, createDict, getDictList, updateDict, deleteDictById } = require('../controller/Dict');

// 新增文章
blogRouter.put('/createDict', function (req, res) {
	let { dict } = req.body;
	if (dict) {
		handleRequest(createDict(Dict), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 获取文章列表
blogRouter.get('/getDictList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getDictList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 查询文章详情
blogRouter.get('/getDictContent/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(queryDictById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 更新文章
blogRouter.post('/updateDict/:id', function (req, res) {
	let { id } = req.params;
	let { dict } = req.body;
	if (id && dict) {
		handleRequest(updateDict(id, Dict), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 删除文章
blogRouter.delete('/deleteDict/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(deleteDictById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
