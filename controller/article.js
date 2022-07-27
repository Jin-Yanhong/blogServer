const articleModel = require('../config/schema/article');

function getArticleList() {
	return articleModel.find({}, { content: 0, __v: 0 }, { sort: { __v: 1 }, limit: 20 });
}

function createArticle(docs) {
	return articleModel
		.create(docs)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log('Create article failed', docs, err);
		});
}

function deleteArticleById(id) {
	return articleModel.findByIdAndDelete(id);
}

function updateArticle(doc) {
	return articleModel.findOneAndUpdate({ _id: id }, doc, {}, function (...args) {
		console.log('updateArticle', args);
	});
}

function queryArticleById(id) {
	return articleModel.findById(id, { _id: 0, __v: 0 });
}

module.exports = {
	getArticleList,
	createArticle,
	deleteArticleById,
	updateArticle,
	queryArticleById,
};
