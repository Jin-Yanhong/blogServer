const { failMsgCode, successMsgCode } = require('../utils/constant');
const { getUserList } = require('../controller/user');
const jwtUtils = require('./jwt');

const auth = {
	verifyLogin: async (req, res, next) => {
		let { password, user_name } = req.body;

		if (!password || !user_name) {
			res.send(failMsgCode.params);
			return;
		}

		const result = await getUserList({
			password,
		});

		if (result.length == 1) {
			const token = jwtUtils.sign(result[0].id);
			res.send(successMsgCode({ accessToken: token }));
		} else {
			res.send(failMsgCode.userNotFound);
		}

		next();
	},
	verifyAuth: () => {},
};

module.exports = auth;
