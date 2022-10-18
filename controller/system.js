const systemConfigModel = require('./schema/system');

function getSystemConfigList(condition) {
    return systemConfigModel.find({ ...condition }, { __v: 0 }, { limit: 1 });
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
