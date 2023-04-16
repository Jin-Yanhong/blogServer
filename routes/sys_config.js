const express = require('express');
const auth = require('../middleware/userAuth');
const { handleRequest, routerConfig } = require('../utils/httpUtils');
const { getSystemConfigList, updateSystemConfig } = require('../controller/sys_config');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});

// 获取系统配置
Router.get('/sysConfig', function (req, res) {
    const condition = req.query;
    handleRequest(getSystemConfigList(condition), res, { args: { condition } });
});

// 更新系统配置
Router.post(
    '/sysConfig/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        const sysConfig = req.body;
        const id = req.params;
        // TODO: 多个配置只允许有一个当前正在使用的配置项 isActive == true
        handleRequest(updateSystemConfig(id, sysConfig), res, { args: { id, docs } });
    }
);

module.exports = Router;

