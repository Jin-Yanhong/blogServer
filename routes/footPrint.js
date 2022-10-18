const { getFootPrintList } = require('../controller/footPrint');
const { centerRouter, handleRequest } = require('../utils/index');

// 获取我的足迹
centerRouter.get('/getFootPrintList', function (req, res) {
    handleRequest(getFootPrintList(), res);
});

module.exports = centerRouter;
