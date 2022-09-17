const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	user_name: String,
	password: String,
	_id: String,
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
