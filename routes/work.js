const express = require('express');
const jwtUtils = require('../middleware/jwt');
const { getWorkList, createWork, updateWork, queryWorkById, deleteWork } = require('../controller/work');
const { handleRequest, routerConfig } = require('../utils/index');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});
// 新增作品
Router.put(
    '/createWork',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let work = req.body.work;
        handleRequest(createWork(work), res, { args: { work } });
    }
);

// 删除作品
Router.delete(
    '/deleteWork/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        handleRequest(deleteWork(id), res, { args: { id } });
    }
);

// 修改作品
Router.post(
    '/updateWork/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        let work = req.body.work;
        handleRequest(updateWork(id, work), res, { args: { id, work } });
    }
);

// 获取作品详情
Router.get('/getWorkDetail/:id', function (req, res) {
    let id = req?.params?.id;
    handleRequest(queryWorkById(id), res, { args: { id } });
});

// 获取作品详情
Router.get('/getWorkList', function (req, res, next) {
    let { pageSize, pageNum } = req.query;
    handleRequest(getWorkList(pageSize, pageNum), res, { args: { pageSize, pageNum } });
});

module.exports = Router;
