const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    date: String,
    groupId: Number,
    author: {
        type: String,
        default: 'Mr.King',
    },
    index: Number,
    content: String,
});

const articleModel = mongoose.model('articles', articleSchema);

module.exports = articleModel;
