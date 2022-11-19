const express = require('express');
const { getFootPrintList } = require('../controller/footPrint');
const { handleRequest, routerConfig } = require('../utils/index');
const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});

// 获取我的足迹
Router.get('/getFootPrintList', function (req, res) {
    handleRequest(getFootPrintList(), res);
});

module.exports = Router;
