const dictModel = require('./model/model_dicts');
// 获取字典列表
function getDictList(size, page) {
    return dictModel.find(
        {},
        { __v: 0, value: 0 },
        {
            sort: {
                index: 1,
            },
            limit: size,
            skip: size * (page - 1),
        }
    );
}
// 新建字典
function createDict(docs) {
    return dictModel.create(docs);
}

// 删除字典
function deleteDictById(id) {
    return dictModel.findByIdAndDelete(id);
}

// 更新字典
function updateDict(id, docs) {
    return dictModel.updateOne({ _id: id }, docs);
}

// 查询字典
function queryDictById(id) {
    return dictModel.findById(id, { desc: 0, index: 0, key: 0, label: 0, _id: 0 });
}

// 使用字典
function useDictByKey(key) {
    return dictModel.findOne({ key: key }, { desc: 0, index: 0, key: 0, label: 0, _id: 0 });
}

module.exports = {
    getDictList,
    createDict,
    deleteDictById,
    updateDict,
    queryDictById,
    useDictByKey,
};
