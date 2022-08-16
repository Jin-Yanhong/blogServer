const axios = require('axios');
const { errorType } = require('../utils/consts');
const { BingURL, wallpaperApi, Unsplash } = require('../config/links');
const { blogRouter, handleRequest, handleRequestError } = require('../utils/index');

// 必应壁纸
blogRouter.get('/bingWallpaper', function (req, res) {
	let request = axios.get(wallpaperApi).then(function (result) {
		let output = [];
		let data = result.data.images;
		for (let i = 0; i < data.length; i++) {
			output.push({
				url: BingURL + data[i].url,
				copyright: data[i].copyright,
				title: data[i].title,
			});
		}
		return output;
	});

	handleRequest(request, res);
});

// unsplash 壁纸
blogRouter.get('/unsplash', function (req, res) {
	let { pageSize, pageNum } = req.query;
	if (pageSize && pageNum) {
		let request = axios.get(Unsplash(pageNum, pageSize)).then(function (result) {
			let output = [];
			let data = result.data;
			for (let i = 0; i < data.length; i++) {
				output.push({
					raw: data[i].urls.raw,
					full: data[i].urls.full,
					regular: data[i].urls.regular,
					small: data[i].urls.small,
					thumb: data[i].urls.thumb,
					small_s3: data[i].urls.small_s3,
				});
			}
			return output;
		});
		handleRequest(request, res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

module.exports = blogRouter;
