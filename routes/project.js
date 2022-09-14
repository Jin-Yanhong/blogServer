const { errorType } = require('../utils/constant');
const { getProjectList, queryProjectById } = require('../controller/project');
const {
	blogRouter,
	handleRequest,
	handleRequestError,
} = require('../utils/index');

blogRouter.get('/getProjectList', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		handleRequest(getProjectList(pageSize, pageNum), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

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
