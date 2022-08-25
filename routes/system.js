const {
	blogRouter,
	handleRequest,
	handleRedisFunction,
} = require('../utils/index');

const saveFileToDisk = require('../middleware/saveFileToDisk');
const saveFileToDataBase = require('../middleware/saveFileToDataBase');

// 文件上传
blogRouter.post(
	'/saveFileToDisk',
	saveFileToDisk.single('file'),
	function (req, res) {
		req.header('Content-Type', 'multipart/form-data');
		let filename = req.file.filename;
		let id = filename.split('-');
		res.send({
			msg: 'success',
			code: 200,
			data: {
				url: '/uploadFile/' + filename,
				filename: filename,
				id: `${id[1]}-${id[2]}`,
			},
		});
	}
);

// 文件上传
blogRouter.post(
	'/saveFileToDataBase',
	saveFileToDataBase.single('file'),
	function (req, res) {
		let file = req.file;
		res.send({
			msg: 'success',
			code: 200,
			data: file,
		});
	}
);
module.exports = blogRouter;
