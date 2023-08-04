const express = require('express');
const { failMsgCode, successMsgCode } = require('../utils/constant');
const { routerConfig, handleRedisFunction } = require('../utils/httpUtils');
const jwtUtils = require('../middleware/jwt');
const auth = require('../middleware/userAuth');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});

// 用户登录
Router.post(
    '/auth/login',
    function (req, res, next) {
        auth.verifyLogin(req, res, next);
    },
    function (req, res) {
        const result = {
            token: res.token,
        };
        res.send(successMsgCode(result));
    }
);

// 用户注销
Router.post(
    '/auth/logout',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        const body = req.body;
        // TODO:结束会话
        res.send(successMsgCode(body));
    }
);
module.exports = Router;
