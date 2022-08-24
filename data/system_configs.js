db.createCollection('system_configs');

db.getCollection('system_configs').insertOne({
	copyright: '©jin-yanhong  All Right Reserved 2022',
	contactInfo: {
		address: '甘肃省兰州市城关区',
		phone: '15593174360',
		email: 'jin-yanhong@foxmail.com',
	},
});
