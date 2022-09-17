const articleModel = require('./schema/article');

/**
 *
 * @param { Number } pageSize pageSize
 * @param { Number } pageNum pageNum
 * @returns
 */
function getArticleList(pageSize, pageNum) {
	return articleModel.find(
		{},
		{ content: 0, __v: 0 },
		{
			sort: {
				index: 1,
			},
			limit: pageSize,
			skip: pageSize * (pageNum - 1),
		}
	);
}

function createArticle(docs) {
	return articleModel.create(docs);
}

function deleteArticleById(id) {
	return articleModel.findByIdAndDelete(id);
}

function updateArticle(id, doc) {
	return articleModel.findOneAndUpdate({ _id: id }, doc, {});
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
