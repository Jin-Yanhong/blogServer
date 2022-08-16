const { errorType } = require('../utils/consts');
const { getFootPrintList } = require('../controller/footPrint');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');

// 获取我的足迹
blogRouter.get('/getFootPrintList', function (req, res) {
	handleRequest(getFootPrintList(), res);
});

module.exports = blogRouter;
