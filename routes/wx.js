const axios = require('axios');
const express = require('express');
const { WxMiniApp } = require('../config/appConfig');
const { handleRequest, routerConfig } = require('../utils/index');
const { successMsgCode } = require('../utils/constant');
const Router = express.Router();

const code2Session = 'https://api.weixin.qq.com/sns/jscode2session';
const getPhoneNumber = 'https://api.weixin.qq.com/wxa/business/getuserphonenumber';
const accessTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token';

Router.use(function (req, res, next) {
    routerConfig(req);
    next();
});

async function getAccessToken() {
    const result = await axios.get(accessTokenUrl + `?grant_type=client_credential&appid=${WxMiniApp.appid}&secret=${WxMiniApp.AppSecret}`);
    return result;
}
// 微信登录
Router.get('/wxLogin', function (req, res) {
    let code = req.query.code;
    let request = axios.get(code2Session + `?appid=${WxMiniApp.appid}&secret=${WxMiniApp.AppSecret}&js_code=${code}&grant_type=authorization_code`).then(function (result) {
        return result;
    });

    handleRequest(request, res, {
        args: { code },
        callback: function (data) {
            res.send(successMsgCode(data.data));
        },
    });
});

// 获取微信绑定的手机号码
Router.get('/getPhone', async function (req, res) {
    let code = req.query.code;

    const {
        data: { access_token },
    } = await getAccessToken();

    let request = axios({
        url: getPhoneNumber + `?access_token=${access_token}`,
        method: 'POST',
        data: {
            code: code,
        },
    }).then(function (result) {
        return result;
    });

    handleRequest(request, res, {
        args: { code },
        callback: function (data) {
            res.send(successMsgCode(data.data));
        },
    });
});

module.exports = Router;
