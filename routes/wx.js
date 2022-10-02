const axios = require('axios');
const { WxMiniApp } = require('../config/appConfig');
const { centerRouter, handleRequest } = require('../utils/index');
const { successMsgCode } = require('../utils/constant');

const code2Session = 'https://api.weixin.qq.com/sns/jscode2session';
const getPhoneNumber = 'https://api.weixin.qq.com/wxa/business/getuserphonenumber';
const accessTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token';

async function getAccessToken() {
	const result = await axios.get(accessTokenUrl + `?grant_type=client_credential&appid=${WxMiniApp.appid}&secret=${WxMiniApp.AppSecret}`);
	return result;
}
// 微信登录
centerRouter.get('/login', function (req, res) {
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
centerRouter.get('/getPhone', async function (req, res) {
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
module.exports = centerRouter;
