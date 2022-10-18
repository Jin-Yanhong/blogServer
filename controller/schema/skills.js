const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: String,
    score: Number,
    index: Number,
    color: {
        type: String,
        default: '#1266c9',
    },
});

const skillModel = mongoose.model('skills', skillSchema);

module.exports = skillModel;
