const fs = require('fs');
const path = require('path');
const { centerRouter, handleRequest } = require('../utils/index');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const saveFileToDisk = require('../middleware/saveFileToDisk');
const saveFileToDataBase = require('../middleware/saveFileToDataBase');
const jwtUtils = require('../middleware/jwt');

centerRouter.get('/listDiskFiles', async function (req, res) {
	const diskPath = path.join(__dirname, '../public/uploadFile');
	console.log(diskPath);
	await fs.readdir(diskPath, function (err, files) {
		try {
			res.send(
				successMsgCode({
					list: files,
				})
			);
		} catch (error) {
			res.send({
				...failMsgCode.other,
				msg: err.message,
			});
		}
	});
});

centerRouter.get('/listDBFiles', async function (req, res) {
	const diskPath = path.join(__dirname, '../public/uploadFile');
	console.log(diskPath);
	await fs.readdir(diskPath, function (err, files) {
		try {
			res.send(
				successMsgCode({
					list: files,
				})
			);
		} catch (error) {
			res.send({
				...failMsgCode.other,
				msg: err.message,
			});
		}
	});
});

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
