// receive file to `LocalDisk`
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { LocalfilePath } = require('../config/appConfig');
const { failMsgCode } = require('../utils/constant');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, LocalfilePath);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '_' + file.originalname);
    },
});

const saveFileToDisk = multer({ storage: storage });

// TODO:文件下载
const downloadFileFromDisk = (req, res, next) => {
    const fileName = req.params.fileNeme;
    const filePath = path.join(__dirname, `../${LocalfilePath}`);
    fs.stat(`${filePath}\\${fileName}`, function (err, stats) {
        if (stats) {
            res.result = `${filePath}\\${fileName}`;
            next();
        } else {
            res.send(failMsgCode.other('The file does not exist'));
        }
    });
};

// TODO:查看文件信息
const getDiskFileInfo = (req, res, next) => {
    const fileName = req.params.fileNeme;
    const filePath = path.join(__dirname, `../${LocalfilePath}`);
    fs.stat(`${filePath}\\${fileName}`, function (err, stats) {
        if (stats) {
            res.result = stats;
            next();
        } else {
            res.send(failMsgCode.other('The file does not exist'));
        }
    });
};

module.exports = { saveFileToDisk, downloadFileFromDisk, getDiskFileInfo };
