const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    index: Number,
    name: String,
    desc: String,
    tag: Array,
    technology: Array,
    screenShortUrl: String,
});

const workModel = mongoose.model('works', workSchema);

module.exports = workModel;
