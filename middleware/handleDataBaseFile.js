// receive file to `DataBase`
const fs = require('fs');
const { MongoClient, GridFSBucket } = require('mongodb');
const { MongoDBServer } = require('../config/appConfig');
const { successMsgCode, failMsgCode } = require('../utils/constant');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}/${MongoDBServer.db}`;
const client = new MongoClient(URL);
const db = client.db(MongoDBServer.db);
const bucket = new GridFSBucket(db, { bucketName: 'myCustomBucket' });

// Create a storage object with a given configuration
const storage = new GridFsStorage({
    url: URL,
    db: db,
    file: (req, file) => {
        const timestamp = Date.now();
        let fileStoreObj = {
            filename: timestamp + '_' + file.originalname,
            id: file.originalname + '_' + timestamp,
            bucketName: '',
            uploadDate: timestamp,
        };
        let regexp = {
            image: /^image\/.*/,
            doc: /^application\/.*/,
            text: /^text\/.*/,
            font: /^font\/.*/,
        };

        if (regexp.image.test(file.mimetype)) {
            fileStoreObj.bucketName = 'image';
        }
        if (regexp.doc.test(file.mimetype)) {
            fileStoreObj.bucketName = 'doc';
        }
        if (regexp.text.test(file.mimetype)) {
            fileStoreObj.bucketName = 'text';
        }
        if (regexp.font.test(file.mimetype)) {
            fileStoreObj.bucketName = 'font';
        }
        return fileStoreObj;
    },
});

const saveFileToDataBase = multer({ storage: storage });

function downloadFileFromDataBase(req, res, next) {
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
