const express = require('express');
const { handleRequest, routerConfig, handleRedisFunction } = require('../utils/index');
const { createUser, deleteUser, updateUser, queryUserById } = require('../controller/user');
const jwtUtils = require('../middleware/jwt');
const auth = require('../middleware/userAuth');
const { successMsgCode } = require('../utils/constant');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res, req, next);
});

// 用户登录
Router.post('/login', function (req, res) {
    auth.verifyLogin(req, res);
});

// 新增用户
Router.put(
    '/addUser',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let user = req.body.user;
        handleRequest(createUser(user), res, { args: { user } });
    }
);

// 删除用户
Router.delete(
    '/deleteUser/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        handleRequest(deleteUser(id), res, { args: { id } });
    }
);

// 修改用户
Router.post(
    '/updateUser/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        let user = req.body.user;
        handleRequest(updateUser(id, user), res, { args: { id, user } });
    }
);

// 用户详情
Router.get(
    '/userInfo/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res, next) {
        auth.verifyLogin(req, res, next);
    }
);

// 用户注销
Router.post(
    '/logout',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let body = req.body;
        // TODO:结束会话
        res.send(successMsgCode(body));
    }
);

module.exports = Router;
