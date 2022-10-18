const RedisServer = {
    host: '127.0.0.1',
    port: 6379,
};

const MongoDBServer = {
    host: 'localhost',
    port: 27017,
    db: 'blog',
};

const WxMiniApp = {
    appid: 'wx3288ea98ebe031cc',
    AppSecret: 'bd01d5970dba80caca26f52433682434',
};

module.exports = {
    RedisServer,
    MongoDBServer,
    WxMiniApp,
};
