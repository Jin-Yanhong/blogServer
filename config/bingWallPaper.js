const BingWallpaperApi =
    "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=10&nc=1612409408851&pid=hp&FORM=BEHPTB&uhd=1&uhdwidth=3840&uhdheight=2160";

const BingURL = "https://cn.bing.com";

function timeEventHandler(time, callback) {
    let done = false;
    setInterval(function () {
        let date = new Date();
        let now = date.getHours() + ":" + date.getMinutes();
        if (now === time && !done) {
            done = true;
            callback();
        } else {
            done = false;
        }
    }, 5000);
}

module.exports = {
    BingURL,
    BingWallpaperApi,
    timeEventHandler,
};
