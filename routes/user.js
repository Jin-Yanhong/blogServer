const { centerRouter, handleRequest, handleRedisFunction } = require('../utils/index');
const { createUser, deleteUser, updateUser, queryUserById } = require('../controller/user');
const jwtUtils = require('../middleware/jwt');
const auth = require('../middleware/userAuth');
const { successMsgCode } = require('../utils/constant');

// 用户登录
centerRouter.post('/login', function (req, res, next) {
	auth.verifyLogin(req, res, next);
});

// 新增用户
centerRouter.put(
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
centerRouter.delete(
	'/deleteUser/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let id = req?.params?.id;
		handleRequest(deleteUser(id, user), res, { args: { id } });
	}
);

// 修改用户
centerRouter.post(
	'/updateUser/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res, next) {
		let id = req?.params?.id;
		let user = req.body.user;
		handleRequest(updateUser(id, user), res, { args: { id, user } });
	}
);

// 用户详情
centerRouter.get(
	'/login',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res, next) {
		auth.verifyLogin(req, res, next);
	}
);

// 用户注销
centerRouter.post(
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

module.exports = centerRouter;
