const mongoose = require('mongoose');

const dict = {
    key: Number,
    value: Array,
    index: Number,
    label: String,
    desc: String,
    create_time: Date,
    create_by: String,
    update_time: Date,
    update_by: String,
    _id: String,
};

const dictSchema = new mongoose.Schema(dict);

const dictModel = mongoose.model('sys_dicts', dictSchema);

module.exports = dictModel;
