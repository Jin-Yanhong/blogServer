const express = require('express');
const { handleRequest, routerConfig } = require('../utils/httpUtils');
var { failMsgCode, successMsgCode } = require('../utils/constant');
const { queryDictById, createDict, getDictList, updateDict, deleteDictById, useDictByKey } = require('../controller/sys_dict.js');
const auth = require('../middleware/userAuth');
const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});

// 新增字典
Router.put(
    '/dict',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        const { dict } = req.body;
        handleRequest(createDict(dict), res, { dict });
    }
);

// 删除字典
Router.delete(
    '/dict/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        var id = req?.params?.id;
        if (id) {
            handleRequest(deleteDictById(id), res);
        }
    }
);

// 更新字典
Router.post(
    '/dict/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        var { id } = req.params;
        var { dict } = req.body;
        handleRequest(updateDict(id, dict), res, {
            args: { id, dict },
        });
    }
);

// 查询字典详情
Router.get(
    '/dict/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        var id = req?.params?.id;
        handleRequest(queryDictById(id), res, {
            args: { id },
        });
    }
);
// 获取字典列表
Router.get(
    '/dict',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        var { size, page } = req.query;
        handleRequest(getDictList(size, page), res, {
            args: { size, page },
            callback: (data) => {
                res.send(
                    successMsgCode({
                        content: data,
                        total: data.length,
                    })
                );
            },
        });
    }
);

// 使用字典
Router.get('/useDict/:key', function (req, res) {
    var key = req?.params?.key;
    handleRequest(useDictByKey(key), res, { args: { key } });
});

module.exports = Router;

