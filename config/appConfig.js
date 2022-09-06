const RedisServer = {
	host: '127.0.0.1',
	port: 6379,
};

const MongoDBServer = {
	host: 'localhost',
	port: 27017,
	db: 'blog',
};

module.exports = {
	RedisServer,
	MongoDBServer,
};
