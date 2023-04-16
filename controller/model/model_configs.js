const mongoose = require('mongoose');

const systemConfig = {
    copyright: String,
    lanLong: Array,
    create_time: Date,
    create_by: String,
    update_time: Date,
    update_by: String,
    _id: String,
    contactInfo: {
        address: String,
        phone: String,
        email: String,
    },
};

const systemConfigSchema = new mongoose.Schema(systemConfig);

const sysConfigModel = mongoose.model('sys_configs', systemConfigSchema);

module.exports = sysConfigModel;
