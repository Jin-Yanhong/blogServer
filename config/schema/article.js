const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	title: String,
	subTitle: String,
	date: String,
	author: {
		type: String,
		default: 'Mr.King',
	},
	index: Number,
	content: String,
});

const articleModel = mongoose.model('articles', articleSchema);

module.exports = articleModel;
