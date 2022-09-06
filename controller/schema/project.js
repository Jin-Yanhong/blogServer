const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	name: String,
	desc: String,
	tag: Array,
	technology: Array,
	screenShortUrl: String,
});

const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel;
