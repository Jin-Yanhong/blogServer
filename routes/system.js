const {
	blogRouter,
	handleRequest,
	handleRedisFunction,
} = require('../utils/index');

const upload = require('../middleware/diskStorage');

// 文件上传
blogRouter.post('/saveFileToDisk', upload.single('file'), function (req, res) {
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
});

// 文件上传
blogRouter.post(
	'/saveFileToDataBase',
	upload.single('file'),
	function (req, res) {
		req.header('Content-Type', 'multipart/form-data');
		upload(req, res, function (err) {
			if (err instanceof multer.MulterError) {
				// A Multer error occurred when uploading.
				res.send({
					msg: 'success',
					code: 200,
					data: {},
				});
			} else if (err) {
				// An unknown error occurred when uploading.
				res.send({
					msg: 'success',
					code: 200,
					data: {},
				});
			}

			res.send({
				msg: 'success',
				code: 200,
				data: {},
			});
		});
	}
);
module.exports = blogRouter;
