const mongoose = require('mongoose');

const systemConfigSchema = new mongoose.Schema({
	copyright: String,
	contactInfo: {
		address: String,
		phone: String,
		email: String,
	},
});

const systemConfigModel = mongoose.model('system_configs', systemConfigSchema);

module.exports = systemConfigModel;
