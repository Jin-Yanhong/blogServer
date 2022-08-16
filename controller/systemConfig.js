const systemConfigModel = require('../config/schema/systemConfig');

function getSystemConfigList() {
	return systemConfigModel.find({}, { __v: 0 }, { limit: 1 });
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
