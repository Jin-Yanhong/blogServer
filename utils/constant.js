// 错误类型
const failMsgCode = {
	params: {
		code: 50001,
		msg: '入参错误',
		data: {},
	},
	queryError: {
		code: 50002,
		msg: '查询出错',
		data: {},
	},
	userNotFound: {
		code: 50003,
		msg: '用户不存在',
		data: {},
	},
	userNotAuthorized: {
		code: 50004,
		msg: '用户未授权',
		data: {},
	},
	userPasswordError: {
		code: 50005,
		msg: '密码错误',
		data: {},
	},
	// 其他错误
	other: {
		code: 50010,
		msg: '其他错误',
		data: {},
	},
};

const successMsgCode = data => {
	return {
		code: 20000,
		msg: 'Success',
		data,
	};
};
module.exports = {
	failMsgCode,
	successMsgCode,
};
