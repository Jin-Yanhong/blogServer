const { errorType } = require('../utils/constant');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');
const { queryDictById, createDict, getDictList, updateDict, deleteDictById, useDictByKey } = require('../controller/Dict');

// 新增字典
blogRouter.put('/createDict', function (req, res) {
	let { dict } = req.body;
	if (dict) {
		handleRequest(createDict(Dict), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 获取字典列表
blogRouter.get('/getDictList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getDictList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 查询字典详情
blogRouter.get('/getDictContent/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(queryDictById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 更新字典
blogRouter.post('/updateDict/:id', function (req, res) {
	let { id } = req.params;
	let { dict } = req.body;
	if (id && dict) {
		handleRequest(updateDict(id, dict), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 使用字典
blogRouter.get('/useDict/:key', function (req, res) {
	let key = req?.params?.key;
	if (key) {
		handleRequest(useDictByKey(key), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});
// 删除字典
blogRouter.delete('/deleteDict/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(deleteDictById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
