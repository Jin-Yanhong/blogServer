// receive file to `diskStorage`
const { MongoDBServer } = require('../config/appConfig');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const mongoose = require('mongoose');

const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}/${MongoDBServer.db}`;
const db = mongoose.connection;

// Create a storage object with a given configuration
const storage = new GridFsStorage({
    url: URL,
    db: db,
    file: (req, file) => {
        let fileStoreObj = {
            // Key:"",
            filename: Date.now() + '_' + file.originalname,
            // metadata:"",
            id: file.fieldname + '_' + Date.now(),
            bucketName: '',
            // chunkSize:"",
            // size:"",
            // md5:"",
            // contentType:"",
            uploadDate: Date,
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
module.exports = saveFileToDataBase;
