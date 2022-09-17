const userModel = require('./schema/user');

/**
 *
 * @param { Number } pageSize pageSize
 * @param { Number } pageNum pageNum
 * @returns
 */

function getUserList(condition) {
	return userModel.findOne({
		...condition,
	});
}

function createUser(docs) {
	return userModel.create(docs);
}

function deleteUserById(id) {
	return userModel.findByIdAndDelete(id);
}

function updateUser(id, doc) {
	return userModel.updateOne({ _id: id }, doc);
}

function queryUserById(id) {
	return userModel.findById(id, { _id: 0, __v: 0 });
}

module.exports = {
	getUserList,
	createUser,
	deleteUserById,
	updateUser,
	queryUserById,
};
