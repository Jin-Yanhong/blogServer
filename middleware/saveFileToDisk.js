// receive file to `diskStorage`
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './public/uploadFile');
	},
	filename: function (req, file, callback) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		callback(
			null,
			file.fieldname + '-' + uniqueSuffix + '-' + file.originalname
		);
	},
});

const saveFileToDisk = multer({ storage: storage });

module.exports = saveFileToDisk;
