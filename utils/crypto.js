const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');

const CryptoJsUtils = {
	encode: data => {
		const hash = CryptoJS.MD5(data).words;
		return hash;
	},
};

module.exports = CryptoJsUtils;
