const axios = require('axios');
const { errorType } = require('../utils/constant');

const {
	blogRouter,
	handleRequest,
	handleRequestError,
} = require('../utils/index');

const bingApi =
	'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=10&nc=1612409408851&pid=hp&FORM=BEHPTB&uhd=1&uhdwidth=3840&uhdheight=2160';

// 必应壁纸
blogRouter.get('/bingWallpaper', function (req, res) {
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

//页尾链接
blogRouter.get('/getOuterLinks', function (req, res) {
	res.send({
		msg: 'success',
		code: 200,
		data: {
			thanks: [
				{
					link: 'https://unsplash.com/',
					name: 'Unsplash',
				},
				{
					link: 'https://flatuicolors.com/',
					name: 'Flatuicolors',
				},
				{
					link: 'https://burst.shopify.com/',
					name: 'Shopify',
				},
				{
					link: 'https://cn.bing.com/',
					name: 'Bing',
				},
				{
					link: 'https://unsplash.com/',
					name: 'Unsplash',
				},
				{
					link: 'https://flatuicolors.com/',
					name: 'Flatuicolors',
				},
				{
					link: 'https://burst.shopify.com/',
					name: 'Shopify',
				},
				{
					link: 'https://cn.bing.com/',
					name: 'Bing',
				},
			],
			tools: [
				{
					link: 'https://unsplash.com/',
					name: 'Unsplash',
				},
				{
					link: 'https://flatuicolors.com/',
					name: 'Flatuicolors',
				},
				{
					link: 'https://burst.shopify.com/',
					name: 'Shopify',
				},
				{
					link: 'https://cn.bing.com/',
					name: 'Bing',
				},
			],
		},
	});
});

module.exports = blogRouter;
