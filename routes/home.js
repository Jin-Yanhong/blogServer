const axios = require('axios');
const { errorType } = require('../utils/consts');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');

// 获取我的足迹
blogRouter.get('/getSystemConfig', function (req, res) {
	handleRequest(getFootPrintList(), res);
});

//
module.exports = blogRouter;
