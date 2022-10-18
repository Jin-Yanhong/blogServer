const dictKeyModel = require('./schema/dict');
// 获取字典列表
function getDictList(pageSize, pageNum) {
    return dictKeyModel.find(
        {},
        { __v: 0, value: 0 },
        {
            sort: {
                index: 1,
            },
            limit: pageSize,
            skip: pageSize * (pageNum - 1),
        }
    );
}
// 新建字典
function createDict(docs) {
    return dictKeyModel.create(docs);
}

// 删除字典
function deleteDictById(id) {
    return dictKeyModel.findByIdAndDelete(id);
}

// 更新字典
function updateDict(id, docs) {
    return dictKeyModel.updateOne({ _id: id }, docs);
}

// 查询字典
function queryDictById(id) {
    return dictKeyModel.findById(id, { desc: 0, index: 0, key: 0, label: 0, _id: 0 });
}

// 使用字典
function useDictByKey(key) {
    return dictKeyModel.findOne({ key: key }, { desc: 0, index: 0, key: 0, label: 0, _id: 0 });
}

module.exports = {
    getDictList,
    createDict,
    deleteDictById,
    updateDict,
    queryDictById,
    useDictByKey,
};
