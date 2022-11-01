const express = require('express');
const { handleRequest, routerConfig } = require('../utils/index');
const { queryDictById, createDict, getDictList, updateDict, deleteDictById, useDictByKey } = require('../controller/dict');
const jwtUtils = require('../middleware/jwt');
const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res, req, next);
});
// 新增字典
Router.put(
    '/createDict',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let { dict } = req.body;
        handleRequest(createDict(dict), res, { dict });
    }
);

// 删除字典
Router.delete(
    '/deleteDict/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        if (id) {
            handleRequest(deleteDictById(id), res);
        }
    }
);

// 更新字典
Router.post(
    '/updateDict/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let { id } = req.params;
        let { dict } = req.body;
        handleRequest(updateDict(id, dict), res, {
            args: { id, dict },
        });
    }
);

// 查询字典详情
Router.get(
    '/getDictContent/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        handleRequest(queryDictById(id), res, {
            args: { id },
        });
    }
);
// 获取字典列表
Router.get(
    '/getDictList',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let { pageSize, pageNum } = req.query;
        handleRequest(getDictList(pageSize, pageNum), res, {
            args: { pageSize, pageNum },
        });
    }
);

// 使用字典
Router.get('/useDict/:key', function (req, res) {
    let key = req?.params?.key;
    handleRequest(useDictByKey(key), res, { args: { key } });
});

module.exports = Router;
