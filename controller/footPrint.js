const footPrintModel = require('./schema/footPrint');

function getFootPrintList() {
    return footPrintModel.find({}, { __v: 0 }, { limit: 20 });
}

function createFootPrint(docs) {
    return footPrintModel.create(docs);
}

function deleteFootPrintById(id) {
    return footPrintModel.findByIdAndDelete(id);
}

module.exports = {
    getFootPrintList,
    createFootPrint,
    deleteFootPrintById,
};
