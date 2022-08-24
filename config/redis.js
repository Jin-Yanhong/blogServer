require('dotenv').config();
const { createClient } = require('Redis');
const { Redis_Host, Redis_Port } = require('./appConfig');
const Redis = createClient({
	socket: {
		host: Redis_Host,
		port: Redis_Port,
	},
});

module.exports = Redis;
