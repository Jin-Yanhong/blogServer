const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	title: String,
	date: { type: Date, default: Date.now },
	author: {
		type: String,
		default: 'Mr.King',
	},
	summary: String,
	content: String,
});

const articleModel = mongoose.model('articles', articleSchema);

module.exports = articleModel;
