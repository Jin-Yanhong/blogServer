const {
	blogRouter,
	handleRequest,
	handleRedisFunction,
} = require('../utils/index');

const {
	getSystemConfigList,
	createSystemConfig,
} = require('../controller/systemConfigs');

const saveFileToDisk = require('../middleware/saveFileToDisk');
const saveFileToDataBase = require('../middleware/saveFileToDataBase');

// const { MongoDBServer } = require('../config/appConfig');
// const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}/${MongoDBServer.db}`;
// const mongoose = require('mongoose');
// mongoose.createConnection(URL);
// const db = mongoose.connection;

/**
 * @api {get} /system/getSystemConfig getSystemConfig
 * @apiName getSystemConfig
 * @apiGroup System
 * @apiSuccessExample Success-Response:
 *     {
 *       "msg": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */
// 获取系统配置
blogRouter.get('/getSystemConfig', function (req, res) {
	handleRequest(getSystemConfigList(), res, function (result) {
		let { copyright, contactInfo, lanLong } = result;
		res.send({
			msg: 'success',
			code: 200,
			data: {
				copyright,
				contactInfo,
				lanLong,
			},
		});
	});
});

/**
 * @api {post} /system/saveFileToDisk saveFileToDisk
 * @apiName saveFileToDisk
 * @apiGroup System
 * @apiBody {file} file The file you want to upload
 * @apiSuccessExample Success-Response:
 *     {
 *       "msg": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

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

/**
 * @api {post} /system/saveFileToDataBase saveFileToDataBase
 * @apiName saveFileToDataBase
 * @apiGroup System
 * @apiBody {file} file The file you want to upload
 * @apiSuccessExample Success-Response:
 *     {
 *       "msg": "success",
 *       "data": "{...}"
 *       "code": 200
 *     }
 */

// 文件上传
blogRouter.post(
	'/saveFileToDataBase',
	saveFileToDataBase.single('file'),
	function (req, res) {
		let file = req.file;
		res.send({
			msg: 'success',
			code: 200,
			data: { file },
		});
	}
);

module.exports = blogRouter;
