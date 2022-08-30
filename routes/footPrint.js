const { errorType } = require('../utils/consts');
const { getFootPrintList } = require('../controller/footPrint');
const {
	blogRouter,
	handleRequest,
	handleRequestError,
} = require('../utils/index');

/**
 * @api {get} /article/getFootPrintList getFootPrintList
 * @apiName getFootPrintList
 * @apiGroup FootPrint
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "msg": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

// 获取我的足迹
blogRouter.get('/getFootPrintList', function (req, res) {
	handleRequest(getFootPrintList(), res);
});

module.exports = blogRouter;
