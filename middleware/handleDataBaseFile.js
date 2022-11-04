// receive file to `DataBase`
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const { MongoDBServer, LocalfilePath } = require('../config/appConfig');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}/${MongoDBServer.db}`;

let bucket;

mongoose.connect(URL, (err, connect) => {
    const db = connect.db;
    bucket = new mongoose.mongo.GridFSBucket(db, {
        // bucketName: 'Uploads',
        ChunkSizeBytes: 1048576, // 1MB => default value of 261120 (255kB).
    });
});

// Create a storage object with a given configuration
const storage = new GridFsStorage({
    url: URL,
    file: (req, file) => {
        const timestamp = Date.now();
        let fileStoreObj = {
            filename: timestamp + '_' + file.originalname,
            id: file.originalname + '_' + timestamp,
            // bucketName: 'Uploads',
            uploadDate: timestamp,
        };
        return fileStoreObj;
    },
});

// 列出数据库文件
const listDataBaseFiles = async (req, res, next) => {
    let result = await bucket.find({});
    res.result = result;
    next();
};

// 上传之数据库
const saveFileToDataBase = multer({ storage });

// 下载数据库文件
const downloadFileFromDataBase = async (req, res, next) => {
    const fileName = req.params.fileNeme;
    const filePath = path.join(__dirname, `../${LocalfilePath}`);
    let result = await bucket.openDownloadStreamByName(fileName).pipe(fs.createWriteStream(`${filePath}\\${fileName}`));
    res.result = result;
    next();
};

// 获取数据库文件
const getDBFIleInfo = async (req, res, next) => {};

// 删除数据库文件
const removeFileFromDataBase = async (req, res, next) => {};

module.exports = { listDataBaseFiles, saveFileToDataBase, downloadFileFromDataBase, getDBFIleInfo, removeFileFromDataBase };
