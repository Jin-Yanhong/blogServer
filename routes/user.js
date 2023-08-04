const express = require('express');
const { handleRequest, routerConfig, handleRedisFunction } = require('../utils/httpUtils');
const { createUser, deleteUser, updateUser, queryUserById } = require('../controller/user.js');
const auth = require('../middleware/userAuth');
const { successMsgCode } = require('../utils/constant');
const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res);
    next();
});

// 新增用户
Router.post(
    '/user',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        const user = req.body.user;
        handleRequest(createUser(user), res, { args: { user } });
    }
);

// 删除用户
Router.delete(
    '/user/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        const id = req?.params?.id;
        handleRequest(deleteUser(id), res, { args: { id } });
    }
);

// 修改用户
Router.put(
    '/user/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res) {
        const id = req?.params?.id;
        const user = req.body.user;
        handleRequest(updateUser(id, user), res, { args: { id, user } });
    }
);

// 用户详情
Router.get(
    '/user/:id',
    function (req, res, next) {
        auth.verifyToken(req, res, next);
    },
    function (req, res, next) {
        auth.verifyLogin(req, res, next);
    }
);

module.exports = Router;
