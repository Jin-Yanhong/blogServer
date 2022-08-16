const wallpaperApi = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=10&nc=1612409408851&pid=hp&FORM=BEHPTB&uhd=1&uhdwidth=3840&uhdheight=2160';

const BingURL = 'https://cn.bing.com';

/**
 *
 * @param {Number} pageNum pageNum
 * @param {Number} pageSize pageSize
 * @returns
 */
const Unsplash = function (pageNum, pageSize) {
	return `https://unsplash.com/napi/topics/travel/photos?page=${pageNum}&per_page=${pageSize}`;
};

module.exports = {
	BingURL,
	wallpaperApi,
	Unsplash,
};
