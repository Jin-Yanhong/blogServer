const dictModel = require('./schema/dict');

function getDictList(pageSize, pageNum) {
	return dictModel.find(
		{},
		{ __v: 0, value: 0 },
		{
			sort: {
				index: 1,
			},
			limit: pageSize,
			skip: pageSize * (pageNum - 1),
		}
	);
}

function queryDictById(id) {
	return dictModel.findById(id, { desc: 0, index: 0, key: 0, label: 0, _id: 0 });
}

function createDict(docs) {
	return dictModel.create(docs);
}

function updateDict(id, docs) {
	return dictModel.updateOne({ _id: id }, docs);
}

function deleteDictById(id) {
	return dictModel.findByIdAndDelete(id);
}

module.exports = {
	getDictList,
	queryDictById,
	createDict,
	updateDict,
	deleteDictById,
};
