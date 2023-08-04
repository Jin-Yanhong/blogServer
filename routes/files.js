const fs = require('fs');
const path = require('path');
const express = require('express');
const auth = require('../middleware/userAuth');
const { routerConfig } = require('../utils/httpUtils');
const { LocalfilePath } = require('../config/appConfig');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const { saveFileToDisk, getDiskFileInfo, downloadFileFromDisk } = require('../middleware/handleDiskFile');
const { listDataBaseFiles, saveFileToDataBase, downloadFileFromDataBase, getDataBaseFileInfo, removeFileFromDataBase } = require('../middleware/handleDataBaseFile');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});

// 列出磁盘文件
Router.get(
    '/files/local',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    async function (req, res) {
        const diskPath = path.join(__dirname, `../${LocalfilePath}`);
        await fs.readdir(diskPath, async function (err, files) {
            try {
                const result = [];
                await files.forEach((file, index) => {
                    result.push({
                        fileName: file,
                        index: index + 1,
                    });
                });
                res.send(successMsgCode(result));
            } catch (error) {
                res.send(failMsgCode.other(err.message));
            }
        });
    }
);

// 文件上传至本地
Router.post(
    '/files/local',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    saveFileToDisk.single('file'),
    function (req, res) {
        res.send(successMsgCode(req.file));
    }
);

// 移除本地文件
Router.delete(
    '/files/local/:fileNeme',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    async function (req, res) {
        const fileNeme = decodeURI(req.params.fileNeme);
        const diskPath = path.join(__dirname, `../${LocalfilePath}/${fileNeme}`);
        await fs.stat(diskPath, async function (err, stats) {
            if (stats) {
                await fs.rm(diskPath, function (err) {
                    try {
                        res.send(successMsgCode());
                    } catch (error) {
                        res.send(failMsgCode.other(err.message));
                    }
                });
            } else {
                res.send(failMsgCode.other(err.message));
                return;
            }
        });
    }
);

// 下载磁盘文件
Router.get(
    '/files/local/:fileNeme',
    // function (req, res, next) {
    //     auth.verifyToken(req, res, next);
    // },
    function (req, res, next) {
        downloadFileFromDisk(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        console.log(result);
        res.download(result, (err) => {
            if (err) {
                console.log('Local File Download Error: ', err.message);
            }
        });
    }
);

// 获取指定磁盘文件信息
Router.get(
    '/files/local/info/:fileNeme',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res, next) {
        getDiskFileInfo(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        res.send(successMsgCode(result));
    }
);

// 列出所有数据库文件
Router.get(
    '/files/db',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res, next) {
        listDataBaseFiles(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        const temp = [];
        await result.forEach((doc) => {
            temp.push(doc);
        });
        res.send(successMsgCode(temp));
    }
);

// 文件上传数据库
Router.post(
    '/files/db',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    saveFileToDataBase.single('file'),
    function (req, res) {
        //TODO: 返回下载链接
        res.send(successMsgCode());
    }
);

// 下载指定数据库文件
Router.get(
    '/files/db/:fileName',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res, next) {
        downloadFileFromDataBase(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        if (result) {
            const fileName = decodeURI(req.params.fileName);
            const url = `http://localhost:3000/uploadFile/${fileName}`;
            res.send(successMsgCode(url));
        } else {
            res.send(failMsgCode.fileDoesNotExist);
        }
    }
);

// 获取数据库文件详情
Router.get(
    '/files/db/info/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res, next) {
        getDataBaseFileInfo(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        res.send(successMsgCode(result));
    }
);

// 移除数据库文件
Router.delete(
    '/files/db/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res, next) {
        removeFileFromDataBase(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        res.send(successMsgCode(result));
    }
);

module.exports = Router;
