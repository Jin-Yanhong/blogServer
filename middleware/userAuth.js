const jwtUtils = require('./jwt');
const { failMsgCode, successMsgCode } = require('../utils/constant');
const { getUserList } = require('../controller/sys_user.js');
const CryptoJsUtils = require('../utils/crypto');

const auth = {
    verifyLogin: async (req, res, next) => {
        const { password, user_name } = req.body;
        if (!password || !user_name) {
            res.send(failMsgCode.params);
            return;
        }
        const result = await getUserList({ user_name }, { password: 1 });

        if (result.length === 1) {
            const userPass = result[0].password;
            const encode = CryptoJsUtils.encode(password).toString();
            if (encode === userPass) {
                const token = jwtUtils.sign(result[0].id);
                res.accessToken = token;
                next();
            } else {
                res.send(failMsgCode.userPasswordError);
            }
        } else {
            res.send(failMsgCode.userNotFound);
        }
    },
    verifyToken: (req, res, next) => jwtUtils.verify(req, res, next),
};

module.exports = auth;

