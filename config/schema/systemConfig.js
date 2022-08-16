const mongoose = require('mongoose');

const systemConfigSchema = new mongoose.Schema({
	name: String,
	desc: String,
	links: String,
	screen_short: String,
});

const systemConfigModel = mongoose.model('systemConfigs', systemConfigSchema);

module.exports = systemConfigModel;
