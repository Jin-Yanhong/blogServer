const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: String,
    desc: String,
    links: String,
    screen_short: String,
});

const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel;
