const fs = require('fs');
const jwt = require('jsonwebtoken');
const { failMsgCode } = require('../utils/constant');
const path = require('path');
const publicKey = fs.readFileSync(path.join(__dirname, '../config/key/public.key'));
const privateKey = fs.readFileSync(path.join(__dirname, '../config/key/private.key'));

const jwtUtils = {
	sign: (id, res) => {
		const data = {
			time: new Date().valueOf(),
			userId: id,
		};

		const jwtSecretKey = privateKey;

		try {
			const token = jwt.sign(data, jwtSecretKey, {
				expiresIn: '1h',
				algorithm: 'RS256',
			});
			return token;
		} catch (error) {
			res.send({
				...failMsgCode.other,
				msg: err.message,
			});
		}
	},
	verify: (req, res, next) => {
		const jwtSecretKey = publicKey;

		const token = req.headers.accesstoken;

		if (token) {
			try {
				jwt.verify(token, jwtSecretKey, { algorithms: ['RS256'] }, function (err, decode) {
					if (err) {
						throw new Error(err.message);
					}
				});
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
