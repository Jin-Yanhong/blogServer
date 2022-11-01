const express = require('express');
const axios = require('axios');
const { successMsgCode } = require('../utils/constant');
const { handleRequest, routerConfig } = require('../utils/index');

const Router = express.Router();

Router.use(function (req, res, next) {
    routerConfig(res, req, next);
});

const bingApi = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=10&nc=1612409408851&pid=hp&FORM=BEHPTB&uhd=1&uhdwidth=3840&uhdheight=2160';
// 必应壁纸
Router.get('/bingWallpaper', function (req, res) {
    let request = axios.get(bingApi).then(function (result) {
        let output = [];
        let data = result.data.images;
        for (let i = 0; i < data.length; i++) {
            output.push('https://cn.bing.com' + data[i].url);
        }
        return output;
    });

    handleRequest(request, res);
});

module.exports = Router;
