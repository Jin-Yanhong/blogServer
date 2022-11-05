// receive file to `LocalDisk`
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { LocalfilePath } = require('../config/appConfig');
const { failMsgCode } = require('../utils/constant');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        const filePath = path.join(__dirname, `../${LocalfilePath}`);
        callback(null, filePath);
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
            res.send(failMsgCode.fileDoesNotExist);
        }
    });
};

// TODO:查看文件信息
const getDiskFileInfo = (req, res, next) => {
    const fileName = req.params.fileNeme;
    const filePath = path.join(__dirname, `../${LocalfilePath}`);
    fs.stat(`${filePath}\\${fileName}`, function (err, stats) {
        if (stats) {
            res.result = {
                fileName: fileName,
                createTime: stats.birthtime,
                modifiedTime: stats.mtime,
                size: stats.size,
            };
            next();
        } else {
            res.send(failMsgCode.fileDoesNotExist);
        }
    });
};

module.exports = { saveFileToDisk, downloadFileFromDisk, getDiskFileInfo };
