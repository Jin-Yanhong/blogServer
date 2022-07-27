const mongoose = require('mongoose');

const footPrintSchema = new mongoose.Schema({
	text: String,
	lanLong: Array,
	icon: String,
});

const footPrintModel = mongoose.model('foot_prints', footPrintSchema);

module.exports = footPrintModel;
