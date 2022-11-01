const fs = require('fs');
const path = require('path');
const express = require('express');
const { handleRequest, routerConfig } = require('../utils/index');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const { saveFileToDisk } = require('../middleware/handleDiskFile');
const { saveFileToDataBase, downloadFileFromDataBase, removeFileFromDataBase } = require('../middleware/handleDataBaseFile');
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
                    ...failMsgCode.other,
                    msg: err.message,
                });
            }
        });
    }
);

// 文件上传本地磁盘
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

// 移除本地磁盘文件
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
                    ...failMsgCode.other,
                    msg: err.message,
                });
            }
        });
    }
);

// 下载指定本地磁盘文件
Router.get(
    '/rmDiskFile/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    async function (req, res) {
        const fileNeme = decodeURI(req.params.fileNeme);
        const diskPath = path.join(__dirname, '../public/uploadFile/' + fileNeme);
        res.send(successMsgCode(diskPath));
    }
);

/************************************* DataBase ***************************************/

// 列出所有数据库文件
Router.get(
    '/listDBFiles',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    async function (req, res) {
        const diskPath = path.join(__dirname, '../public/uploadFile');
        console.log(diskPath);
        await fs.readdir(diskPath, function (err, files) {
            try {
                res.send(
                    successMsgCode({
                        files,
                    })
                );
            } catch (error) {
                res.send({
                    ...failMsgCode.other,
                    msg: err.message,
                });
            }
        });
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
        res.send(successMsgCode({}));
    }
);

// 移除数据库文件
Router.delete(
    '/rmDataBaseBFile/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        removeFileFromDataBase(req, res, next);
    },
    async function (req, res) {
        const fileNeme = decodeURI(req.params.fileNeme);
        const diskPath = path.join(__dirname, '../public/uploadFile/' + fileNeme);
        await fs.rm(diskPath, function (err) {
            try {
                res.send(successMsgCode('Delete Success'));
            } catch (error) {
                res.send({
                    ...failMsgCode.other,
                    msg: err.message,
                });
            }
        });
    }
);

// 下载指定数据库文件
Router.get(
    '/downloadDiskFile/:fileNeme',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        downloadFileFromDataBase(req, res, next);
    },
    async function (req, res) {
        const fileNeme = decodeURI(req.params.fileNeme);
        const diskPath = path.join(__dirname, '../public/uploadFile/' + fileNeme);
        res.send(successMsgCode(diskPath));
    }
);

module.exports = Router;
