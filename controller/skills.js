const skillModel = require('./schema/skills');

/**
 *
 * @param { Number } pageSize pageSize
 * @param { Number } pageNum pageNum
 * @returns
 */
function getSkillsList(pageSize, pageNum) {
    return skillModel.find(
        {},
        { __v: 0 },
        {
            sort: {
                index: 1,
            },
            limit: pageSize,
            skip: pageSize * (pageNum - 1),
        }
    );
}

function createSkill(docs) {
    return skillModel.create(docs);
}

function updateSkill(id, docs) {
    return skillModel.updateOne({ _id: id }, { ...docs });
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
