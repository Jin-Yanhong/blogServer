const express = require("express");
const axios = require("axios");
const router = express.Router();

const { BingURL, BingWallpaperApi } = require("../config/bingWallPaper");
// 开启跨域访问
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/bingWallpaper", function (req, res, next) {
    axios
        .get(BingWallpaperApi)
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
            res.send({
                code: 200,
                msg: "success",
                data: output,
            });
        })
        .catch(function (error) {
            console.log("Get BingWallpaper Error:", error);
        });
});

module.exports = router;
