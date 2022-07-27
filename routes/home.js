const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getArticleList, queryArticleById } = require('../controller/article');
const { getFootPrintList, createFootPrint } = require('../controller/footPrint');

const { BingURL, wallpaperApi, Unsplash } = require('../config/links');
// 开启跨域访问
router.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	// res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

router.get('/bingWallpaper', function (req, res, next) {
	axios
		.get(wallpaperApi)
		.then(function (result) {
			let output = [];
			let data = result.data.images;
			for (let i = 0; i < data.length; i++) {
				output.push({
					url: BingURL + data[i].url,
					urlbase: data[i].copyright,
					copyright: data[i].copyright,
					title: data[i].title,
				});
			}
			return output;
		})
		.then(result => {
			res.send({
				code: 200,
				msg: 'success',
				data: result,
			});
		})
		.catch(function (error) {
			console.log('Get BingWallpaper Error:', error);
		});
});

router.get('/unsplash', function (req, res, next) {
	axios
		.get(Unsplash)
		.then(function (result) {
			console.log('output', result);
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
		})
		.then(result => {
			res.send({
				code: 200,
				msg: 'success',
				data: result,
			});
		})
		.catch(function (error) {
			console.log('Get Unsplash Error:', error);
		});
});

router.get('/getArticleList', function (req, res, next) {
	getArticleList().then(result => {
		res.send({
			code: 200,
			msg: 'success',
			data: result,
		});
	});
});

router.get('/getArticleContent', function (req, res, next) {
	let id = req?.query?.id;

	if (id) {
		queryArticleById(id).then(result => {
			res.send({
				code: 200,
				msg: 'success',
				data: result,
			});
		});
	} else {
		res.send({
			code: 200,
			msg: '参数错误',
			data: {},
		});
	}
});

router.get('/getFootPrintList', function (req, res, next) {
	getFootPrintList().then(result => {
		console.log(result);
		res.send({
			code: 200,
			msg: 'success',
			data: result,
		});
	});
});
module.exports = router;
