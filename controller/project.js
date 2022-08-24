const projectModel = require('../config/schema/projectModel');

function getProjectList() {
	return projectModel.find({}, { __v: 0 }, { limit: 20 });
}

function createProject(docs) {
	return projectModel.create(docs);
}

function deleteProjectById(id) {
	return projectModel.findByIdAndDelete(id);
}
module.exports = {
	getProjectList,
	createProject,
	deleteProjectById,
};
