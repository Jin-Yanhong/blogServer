const jwt = require('jsonwebtoken');
const { failMsgCode } = require('../utils/constant');

const jwtUtils = {
	sign: (id, res) => {
		const data = {
			time: new Date().valueOf(),
			userId: id,
		};

		const jwtSecretKey = process.env.JWT_SECRET_KEY;

		try {
			const token = jwt.sign(data, jwtSecretKey, { expiresIn: 60 * 60 });
			return token;
		} catch (error) {
			res.send({
				...failMsgCode.other,
				msg: err.message,
			});
		}
	},
	verify: (req, res, next) => {
		const jwtSecretKey = process.env.JWT_SECRET_KEY;
		const token = req.headers.accesstoken;
		if (token) {
			try {
				jwt.verify(token, jwtSecretKey);
				next();
			} catch (err) {
				res.send({
					...failMsgCode.userNotAuthorized,
				});
			}
		} else {
			res.send({
				...failMsgCode.userNotAuthorized,
			});
		}
	},
};

module.exports = jwtUtils;
