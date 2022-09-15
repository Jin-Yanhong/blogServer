const mongoose = require('mongoose');

const dictSchema = new mongoose.Schema({
	key: String,
	value: Array,
	index: Number,
	label: String,
	desc: String,
});

const dictModel = mongoose.model('dicts', dictSchema);

module.exports = dictModel;
