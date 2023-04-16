var RedisServer = {
    host: '127.0.0.1',
    port: 6379,
};

var MongoDBServer = {
    host: 'localhost',
    port: 27017,
    db: 'blog',
};

var LocalfilePath = '/public/uploadFile';

module.exports = {
    RedisServer,
    MongoDBServer,
    LocalfilePath,
};
