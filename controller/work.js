const workModel = require('./schema/work');

/**
 *
 * @param { Number } pageSize pageSize
 * @param { Number } pageNum pageNum
 * @returns
 */

function getWorkList(pageSize, pageNum) {
	return workModel.find({}, { content: 0, __v: 0 }, { sort: { __v: 1 }, limit: pageSize, skip: pageSize * (pageNum - 1) });
}

function createWork(docs) {
	return workModel.create(docs);
}

function deleteWorkById(id) {
	return workModel.findByIdAndDelete(id);
}

function updateWork(doc) {
	return workModel.findOneAndUpdate({ _id: id }, doc, {});
}

function queryWorkById(id) {
	return workModel.findById(id, { _id: 0, __v: 0 });
}

module.exports = {
	getWorkList,
	createWork,
	deleteWorkById,
	updateWork,
	queryWorkById,
};
