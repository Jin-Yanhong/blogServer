const express = require('express');
const { handleRequest, routerConfig } = require('../utils/index');
const { queryArticleById, createArticle, getArticleList, updateArticle, deleteArticleById } = require('../controller/article');
const jwtUtils = require('../middleware/jwt');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(req);
    next();
});

// 新增文章
Router.put(
    '/createArticle',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let { article } = req.body;
        handleRequest(createArticle(article), res, { article });
    }
);

// 获取文章列表
Router.get('/getArticleList', function (req, res) {
    let { pageSize, pageNum } = req.query;
    handleRequest(getArticleList(pageSize, pageNum), res, { args: { pageSize, pageNum } });
});

// 查询文章详情
Router.get('/getArticleContent/:id', function (req, res) {
    let id = req?.params?.id;
    handleRequest(queryArticleById(id), res, { args: { id } });
});

// 更新文章
Router.post(
    '/updateArticle/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let { id } = req.params;
        let { article } = req.body;
        handleRequest(updateArticle(id, article), res, { args: { id, article } });
    }
);

// 删除文章
Router.delete(
    '/deleteArticle/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        handleRequest(deleteArticleById(id), res, { args: { id } });
    }
);

module.exports = Router;
