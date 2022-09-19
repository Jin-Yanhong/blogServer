const { centerRouter, handleRequest } = require('../utils/index');
const { successMsgCode } = require('../utils/constant');
const saveFileToDisk = require('../middleware/saveFileToDisk');
const saveFileToDataBase = require('../middleware/saveFileToDataBase');

const jwtUtils = require('../middleware/jwt');
// 文件上传
centerRouter.post(
	'/saveFileToDisk',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	saveFileToDisk.single('file'),
	function (req, res) {
		let filename = req.file.filename;
		let id = filename.split('-');
		res.send(
			successMsgCode({
				url: '/uploadFile/' + filename,
				filename: filename,
				id: `${id[1]}-${id[2]}`,
			})
		);
	}
);

// 文件上传
centerRouter.post(
	'/saveFileToDataBase',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	saveFileToDataBase.single('file'),
	function (req, res) {
		let file = req.file;
		res.send(successMsgCode(file));
	}
);

module.exports = centerRouter;
