const mongoose = require('mongoose');

const footPrintSchema = new mongoose.Schema({
	city: String,
	lanLong: Array,
	icon: String,
	label: String,
});

const footPrintModel = mongoose.model('foot_prints', footPrintSchema);

module.exports = footPrintModel;
