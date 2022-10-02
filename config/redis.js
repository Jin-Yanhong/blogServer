const { createClient } = require('redis');
const { RedisServer } = require('./appConfig');
const Redis = createClient({
	socket: {
		host: RedisServer.host,
		port: RedisServer.port,
	},
});
/* 
// Redis usage example 

const { redisFunction, handleRedisFunction } = require('../utils/index');

handleRedisFunction(
	redisFunction.get,
	function (result) {
		if (result) {
			let config = JSON.parse(result);
			res.send({
				msg: 'success',
				code: 200,
				data: config,
			});
			createSystemConfig(config);
		}
	},
	{ key: 'sysConfig' }
);
*/
module.exports = Redis;
