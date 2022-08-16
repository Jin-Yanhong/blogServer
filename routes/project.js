const { errorType } = require('../utils/consts');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');

blogRouter.get('/bingWallpaper', function (req, res) {
	handleRequest(request, res);
});

module.exports = blogRouter;
