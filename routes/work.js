const { errorType } = require('../utils/constant');
const { getWorkList, updateWork, queryWorkById } = require('../controller/work');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');

blogRouter.get('/getWorkList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getWorkList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 获取项目详情
blogRouter.get('/getWorkDetail/:id', function (req, res) {
	let id = req?.params?.id;
	if (id) {
		handleRequest(queryWorkById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 获取项目详情
blogRouter.post('/updateWork/:id', function (req, res) {
	let id = req?.params?.id;
	let work = req.body.work;
	if (id) {
		handleRequest(updateWork(id, work), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
