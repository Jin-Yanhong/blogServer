const footPrintModel = require('../config/schema/footPrint');

function getFootPrintList() {
	return footPrintModel.find({}, { __v: 0 }, { limit: 20 });
}

function createFootPrint(docs) {
	return footPrintModel
		.create(docs)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log('Create article failed', docs, err);
		});
}

module.exports = {
	getFootPrintList,
	createFootPrint,
};
