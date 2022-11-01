// receive file to `DataBase`
const fs = require('fs');
const { MongoClient, GridFSBucket } = require('mongodb');
const { MongoDBServer } = require('../config/appConfig');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}`;
const client = new MongoClient(URL);
const db = client.db(MongoDBServer.db);
const bucket = new GridFSBucket(db, { bucketName: 'myCustomBucket' });

const saveFileToDataBase = function (req, res, next) {
    res.header('Content-Type', 'multipart/form-data');
    req.pipe(fs.createWriteStream('.' + req.url));

    // bucket.openUploadStream(file.name, {
    //     chunkSizeBytes: 1048576,
    //     metadata: { field: 'field', value: 'myValue' },
    // });

    next();
};

function downloadFileFromDataBase(req, res, next) {
    res.header('Content-Type', 'multipart/form-data');
    fs.createReadStream('./myFile').pipe(
        bucket.openUploadStream('myFile', {
            chunkSizeBytes: 1048576,
            metadata: { field: 'myField', value: 'myValue' },
        })
    );
    next();
}

function removeFileFromDataBase(req, res, next) {
    fs.createReadStream('./myFile').pipe(
        bucket.openUploadStream('myFile', {
            chunkSizeBytes: 1048576,
            metadata: { field: 'myField', value: 'myValue' },
        })
    );
    next();
}
module.exports = { saveFileToDataBase, downloadFileFromDataBase, removeFileFromDataBase };
