const skillModel = require('../config/schema/skills');

function getSkillsList() {
	return skillModel.find({}, { __v: 0 }, { limit: 30 });
}

function createSkill(docs) {
	return skillModel.create(docs);
}

function updateSkill(docs) {
	return skillModel.create(docs);
}

function deleteSkillById(id) {
	return skillModel.findByIdAndDelete(id);
}

module.exports = {
	getSkillsList,
	createSkill,
	updateSkill,
	deleteSkillById,
};
