// receive file to `DataBase`
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const { GridFsStorage } = require('multer-gridfs-storage');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const { MongoDBServer, LocalfilePath } = require('../config/appConfig');
const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}/${MongoDBServer.db}`;
const { ObjectId } = mongoose.Types;

let bucket;

mongoose.connect(URL, (err, connect) => {
    const db = connect.db;
    bucket = new mongoose.mongo.GridFSBucket(db, {
        bucketName: 'Uploads',
        ChunkSizeBytes: 1048576, // 1MB => default value of 261120 (255kB).
    });
});

// Create a storage object with a given configuration
const storage = new GridFsStorage({
    url: URL,
    file: (req, file) => {
        const timestamp = Date.now();
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
        let fileStoreObj = {
            filename: timestamp + '_' + file.originalname,
            bucketName: 'Uploads',
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
    let temp = [];
    await bucket.find({}).forEach((doc) => {
        temp.push(doc);
    });

    const isExit =
        temp.filter(function (file) {
            return file.filename === fileName;
        }).length >= 1;

    let result = undefined;

    result = isExit ? await bucket.openDownloadStreamByName(fileName).pipe(fs.createWriteStream(`${filePath}\\${fileName}`)) : null;

    res.result = result;

    next();
};

// 获取数据库文件信息
const getDataBaseFileInfo = async (req, res, next) => {
    const id = req.params.id;

    if (id.length !== 24) {
        res.send(failMsgCode.params);
        return;
    }

    let result = [];

    await bucket.find({ _id: ObjectId(id) }).forEach((doc) => {
        result.push(doc);
    });

    if (result.length > 0) {
        res.result = result;
        next();
    } else {
        res.send(failMsgCode.fileDoesNotExist);
    }
};

// 删除数据库文件
const removeFileFromDataBase = async (req, res, next) => {
    const id = req.params.id;

    if (id.length !== 24) {
        res.send(failMsgCode.params);
        return;
    }

    let result;
    let temp = [];

    await bucket.find({ _id: ObjectId(id) }).forEach((doc) => {
        temp.push(doc);
    });

    if (temp.length > 0) {
        result = await bucket.delete(ObjectId(id));
        res.result = result;
        next();
    } else {
        res.send(failMsgCode.fileDoesNotExist);
    }
};

module.exports = { listDataBaseFiles, saveFileToDataBase, downloadFileFromDataBase, getDataBaseFileInfo, removeFileFromDataBase };
