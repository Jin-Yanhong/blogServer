const {
	blogRouter,
	handleRequest,
	handleRedisFunction,
} = require('../utils/index');

blogRouter.post('/login', function (req, res) {
	let body = req.body;
	res.send({
		msg: 'success',
		code: 200,
		data: {
			accessToken: '123',
			body,
		},
	});
});

blogRouter.post('/info', function (req, res) {
	let body = req.body;
	res.send({
		msg: 'success',
		code: 200,
		data: {
			roles: 'admin',
			name: 'Tony',
			avatar: 'http://localhost:3000/uploadFile/works.jpg',
			introduction: 'this is introduction',
			email: '820877998@qq.com',
		},
	});
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
