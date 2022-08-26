const { errorType } = require('../utils/consts');
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

blogRouter.get('/getProjectDetailById', function (req, res) {
	let id = req?.query?.id;
	if (id) {
		handleRequest(queryProjectById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
