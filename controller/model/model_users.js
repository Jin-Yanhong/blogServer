const mongoose = require('mongoose');

const user = {
    user_name: String,
    password: String,
    create_time: Date,
    create_by: String,
    update_time: Date,
    update_by: String,
    _id: String,
};

const userSchema = new mongoose.Schema(user);

const userModel = mongoose.model('sys_users', userSchema);

module.exports = userModel;
