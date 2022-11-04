const fs = require('fs');
const path = require('path');
const express = require('express');
const { routerConfig } = require('../utils/index');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const { LocalfilePath } = require('../config/appConfig');

const { saveFileToDisk, getDiskFileInfo, downloadFileFromDisk } = require('../middleware/handleDiskFile');
const { listDataBaseFiles, saveFileToDataBase, downloadFileFromDataBase, getDBFIleInfo, removeFileFromDataBase } = require('../middleware/handleDataBaseFile');
const jwtUtils = require('../middleware/jwt');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(req);
    res.header('Content-Type', 'multipart/form-data');
    next();
});

// 列出磁盘文件
Router.get(
    '/listDiskFiles',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    async function (req, res) {
        const diskPath = path.join(__dirname, '../public/uploadFile');
        await fs.readdir(diskPath, function (err, files) {
            try {
                res.send(
                    successMsgCode({
                        files,
                    })
                );
            } catch (error) {
                res.send({
                    ...failMsgCode.other(),
                    msg: err.message,
                });
            }
        });
    }
);

// 文件上传至本地
Router.post(
    '/saveFileToDisk',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    saveFileToDisk.single('file'),
    function (req, res) {
        res.send(successMsgCode(req.file));
    }
);

// 移除本地文件
Router.delete(
    '/rmDiskFile/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    async function (req, res) {
        const fileNeme = decodeURI(req.params.fileNeme);
        const diskPath = path.join(__dirname, '../public/uploadFile/' + fileNeme);
        await fs.rm(diskPath, function (err) {
            try {
                res.send(successMsgCode('Delete Success'));
            } catch (error) {
                res.send({
                    ...failMsgCode.other(),
                    msg: err.message,
                });
            }
        });
    }
);

// 下载磁盘文件
Router.get(
    '/downloadFileFromDisk/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        downloadFileFromDisk(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        res.download(result);
    }
);

// 获取指定磁盘文件信息
Router.get(
    '/getDiskFileInfo/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        getDiskFileInfo(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        console.log(result);
        res.send(successMsgCode(result));
    }
);

/************************************* DataBase ***************************************/

// 列出所有数据库文件
Router.get(
    '/listDBFiles',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        listDataBaseFiles(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        let temp = [];
        await result.forEach((doc) => {
            temp.push(doc);
        });
        res.send(successMsgCode(temp));
    }
);

// 文件上传数据库
Router.post(
    '/saveFileToDataBase',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    saveFileToDataBase.single('file'),
    function (req, res) {
        //TODO: 返回下载链接
        res.send(successMsgCode({}));
    }
);

// 下载指定数据库文件
Router.get(
    '/downloadFileFromDB/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        downloadFileFromDataBase(req, res, next);
    },
    async function (req, res) {
        // const result = res.result;
        const fileNeme = decodeURI(req.params.fileNeme);
        const url = `http://localhost:3000/uploadFile/${fileNeme}`;
        res.send(successMsgCode(url));
        // TODO:删除缓存
        // await fs.rmdir(`${filePath}\\${fileNeme}`, function (err) {
        //     if (err) {
        //         console.log('tempFile remove Error');
        //     }
        // });
    }
);

// 获取数据库文件详情
Router.get(
    '/getDBFileInfo/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        getDBFIleInfo(req, res, next);
    },
    async function (req, res) {
        const result = res.result;
        res.send(successMsgCode(result));
    }
);

// 移除数据库文件
Router.delete(
    '/rmDBFile/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
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
