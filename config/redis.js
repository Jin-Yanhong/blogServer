var { createClient } = require('redis');
var { RedisServer } = require('./appConfig');
var Redis = createClient({
    socket: {
        host: RedisServer.host,
        port: RedisServer.port,
    },
});
/* 
// Redis usage example 

var { redisFunction, handleRedisFunction } = require('../utils/index');

handleRedisFunction(
	redisFunction.get,
	function (result) {
		if (result) {
			var config = JSON.parse(result);
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
