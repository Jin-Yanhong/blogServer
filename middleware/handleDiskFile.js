// receive file to `DataBase`
const fs = require('fs');
const { MongoClient, GridFSBucket } = require('mongodb');
const { MongoDBServer } = require('../config/appConfig');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}`;
const client = new MongoClient(URL);
const db = client.db(MongoDBServer.db);
const bucket = new GridFSBucket(db, { bucketName: 'myCustomBucket' });

function saveFileToDisk(req, res, next) {
    res.header('Content-Type', 'multipart/form-data');

    fs.createReadStream('./myFile').pipe(
        bucket.openUploadStream('myFile', {
            chunkSizeBytes: 1048576,
            metadata: { field: 'myField', value: 'myValue' },
        })
    );
    next();
}

function downloadFileFromDisk(req, res, next) {
    res.header('Content-Type', 'multipart/form-data');
    fs.createReadStream('./myFile').pipe(
        bucket.openUploadStream('myFile', {
            chunkSizeBytes: 1048576,
            metadata: { field: 'myField', value: 'myValue' },
        })
    );
    next();
}

module.exports = { saveFileToDisk, downloadFileFromDisk };
