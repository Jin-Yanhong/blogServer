const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: String,
    date: { type: Date, default: Date.now },
    author: {
        type: String,
        default: "Jin-Yanhong",
    },
    summary: String,
    content: String,
});

const articleModel = mongoose.model("article", articleSchema);

module.exports = articleModel;
