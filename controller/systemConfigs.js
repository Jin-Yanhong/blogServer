const systemConfigModel = require('./schema/systemConfigs');

function getSystemConfigList() {
	return systemConfigModel.find({}, { __v: 0 }, { limit: 1 });
}

function createSystemConfig(docs) {
	return systemConfigModel.create(docs);
}

function updateSystemConfig(id, docs) {
	return systemConfigModel.updateOne({ _id: id }, docs);
}

function deleteSystemConfigById(id) {
	return systemConfigModel.findByIdAndDelete(id);
}

module.exports = {
	getSystemConfigList,
	createSystemConfig,
	updateSystemConfig,
	deleteSystemConfigById,
};
