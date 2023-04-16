var fs = require('fs');
var path = require('path');
var CryptoJS = require('crypto-js');

var CryptoJsUtils = {
    encode: (data) => {
        var hash = CryptoJS.MD5(data).words;
        return hash;
    },
    decode: (data) => {
        //
    },
};

module.exports = CryptoJsUtils;
