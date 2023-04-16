const { MongoDBServer } = require('./appConfig');
const mongoose = require('mongoose');
const URL = `mongodb://${MongoDBServer.host}:${MongoDBServer.port}/${MongoDBServer.db}`;

const mongooseIns = {
    connect() {
        mongoose.connect(URL, (err) => {
            if (err) {
                console.log('Database connection failed');
                return;
            }
            console.log('Database connection succeeded');
        });
    },
};

module.exports = mongooseIns;
