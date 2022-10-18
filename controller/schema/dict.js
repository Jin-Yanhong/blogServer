const mongoose = require('mongoose');

const dictKeySchema = new mongoose.Schema({
    key: Number,
    value: Array,
    index: Number,
    label: String,
    desc: String,
});

const dictKeyModel = mongoose.model('dicts', dictKeySchema);

module.exports = dictKeyModel;
