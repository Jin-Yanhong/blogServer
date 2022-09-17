const { blogRouter, handleRequest, handleRedisFunction } = require('../utils/index');
const { getUserList, createUser, deleteUserById, updateUser, queryUserById } = require('../controller/user');
const jwt = require('jsonwebtoken');

blogRouter.post('/login', function (req, res) {
	let body = req.body;
	let jwtSecretKey = process.env.JWT_SECRET_KEY;
	getUserList(body)
		.then((result) => {
			if (result) {
				let data = {
					time: Date(),
					userId: result._id,
				};
				const token = jwt.sign(data, jwtSecretKey);
				res.send({
					msg: 'success',
					code: 200,
					data: {
						accessToken: token,
					},
				});
			} else {
				res.send({
					msg: 'User Not Found',
					code: 404,
					data: {},
				});
			}
		})
		.catch((err) => {});
});

blogRouter.post('/logout', function (req, res) {
	let body = req.body;
	res.send({
		msg: 'success',
		code: 200,
		data: {},
	});
});

module.exports = blogRouter;
