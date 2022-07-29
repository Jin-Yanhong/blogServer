const footPrintModel = require('../config/schema/footPrint');

function getFootPrintList() {
	return footPrintModel.find({}, { __v: 0 }, { limit: 20 });
}

function createFootPrint(docs) {
	return footPrintModel.create(docs);
}

module.exports = {
	getFootPrintList,
	createFootPrint,
};
