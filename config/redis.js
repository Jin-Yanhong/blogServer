require('dotenv').config();
const { createClient } = require('Redis');
const { Redis_Host, Redis_Port } = require('./appConfig');
const Redis = createClient({
	socket: {
		host: Redis_Host,
		port: Redis_Port,
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
