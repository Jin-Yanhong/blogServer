const sysConfigModel = require('./model/model_configs');

function getSystemConfigList(condition) {
    return sysConfigModel.find({ ...condition }, { __v: 0 }, { limit: 1 });
}

function createSystemConfig(docs) {
    return sysConfigModel.create(docs);
}

function updateSystemConfig(id, docs) {
    return sysConfigModel.updateOne({ _id: id }, docs);
}

function deleteSystemConfigById(id) {
    return sysConfigModel.findByIdAndDelete(id);
}

module.exports = {
    getSystemConfigList,
    createSystemConfig,
    updateSystemConfig,
    deleteSystemConfigById,
};
