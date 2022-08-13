const express = require('express');
const axios = require('axios');
const router = express.Router();
const { errorType } = require('../utils/consts');
const { BingURL, wallpaperApi, Unsplash } = require('../config/links');
const { getArticleList, queryArticleById } = require('../controller/article');
const { getFootPrintList } = require('../controller/footPrint');
const { handleRequest, handleRequestError } = require('../utils/index');

// 开启跨域访问
router.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

// 必应壁纸
router.get('/bingWallpaper', function (req, res) {
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
router.get('/unsplash', function (req, res) {
	let request = axios.get(Unsplash).then(function (result) {
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
});

// 获取文章列表
router.get('/getArticleList', function (req, res) {
	handleRequest(getArticleList(), res);
});

// 根据文章 id 查询文章详情
router.get('/getArticleContent', function (req, res) {
	let id = req?.query?.id;
	if (id) {
		handleRequest(queryArticleById(id), res);
	} else {
		handleRequestError(errorType.params_in, res);
	}
});

// 获取我的足迹
router.get('/getFootPrintList', function (req, res) {
	handleRequest(getFootPrintList(), res);
});

//
module.exports = router;
