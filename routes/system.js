const express = require('express');
const jwtUtils = require('../middleware/jwt');
const { handleRequest, routerConfig } = require('../utils/index');
const { getSystemConfigList, updateSystemConfig } = require('../controller/system');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});

// 获取系统配置
Router.post('/getSystemConfig', function (req, res) {
    let condition = req.body;
    handleRequest(getSystemConfigList(condition), res, { args: { condition } });
});

// 获取系统配置
Router.post(
    '/updateSystemConfig/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let docs = req.body;
        let id = req.params;
        // TODO: 多个配置只允许有一个当前正在使用的配置项 isActive == true
        handleRequest(updateSystemConfig(id, docs), res, { args: { id, docs } });
    }
);

module.exports = Router;
