// receive file to `DataBase`
const fs = require('fs');
const multer = require('multer');
const { MongoClient, GridFSBucket } = require('mongodb');
const { MongoDBServer } = require('../config/appConfig');
const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}`;
const client = new MongoClient(URL);
const db = client.db(MongoDBServer.db);
const bucket = new GridFSBucket(db, { bucketName: 'myCustomBucket' });

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploadFile');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '_' + file.originalname);
    },
});

const saveFileToDisk = multer({ storage: storage });

// TODO:文件下载
function downloadFileFromDisk(req, res, next) {
    fs.createReadStream('./myFile').pipe(
        bucket.openUploadStream('myFile', {
            chunkSizeBytes: 1048576,
            metadata: { field: 'myField', value: 'myValue' },
        })
    );
    next();
}

module.exports = { saveFileToDisk, downloadFileFromDisk };
