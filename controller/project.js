const projectModel = require('../config/schema/project');

/**
 *
 * @param { Number } pageSize pageSize
 * @param { Number } pageNum pageNum
 * @returns
 */

function getProjectList(pageSize, pageNum) {
	return projectModel.find(
		{},
		{ content: 0, __v: 0 },
		{ sort: { __v: 1 }, limit: pageSize, skip: pageSize * (pageNum - 1) }
	);
}

function createProject(docs) {
	return projectModel.create(docs);
}

function deleteProjectById(id) {
	return projectModel.findByIdAndDelete(id);
}

function updateProject(doc) {
	return projectModel.findOneAndUpdate({ _id: id }, doc, {});
}

function queryProjectById(id) {
	return projectModel.findById(id, { _id: 0, __v: 0 });
}

module.exports = {
	getProjectList,
	createProject,
	deleteProjectById,
	updateProject,
	queryProjectById,
};
