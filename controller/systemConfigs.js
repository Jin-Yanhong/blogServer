const systemConfigModel = require('../config/schema/systemConfigs');

function getSystemConfigList() {
	return systemConfigModel.findOne({}, { __v: 0 }, { limit: 1 });
}

function createSystemConfig(docs) {
	return systemConfigModel.create(docs);
}

function updateSystemConfig(docs) {
	return systemConfigModel.create(docs);
}
module.exports = {
	getSystemConfigList,
	createSystemConfig,
	updateSystemConfig,
};
