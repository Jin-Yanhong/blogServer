const jwtUtils = require('./jwt');
const { failMsgCode, successMsgCode } = require('../utils/constant');
const { getUserList } = require('../controller/user.js');
const CryptoJsUtils = require('../utils/crypto');

const auth = {
    verifyLogin: async (req, res, next) => {
        const { passWord, userName } = req.body;
        if (!passWord || !userName) {
            res.send(failMsgCode.params);
            return;
        }
        const result = await getUserList({ user_name: userName }, { password: 1 });

        if (result.length === 1) {
            const userPass = result[0].password;
            const encode = CryptoJsUtils.encode(passWord).toString();

            if (encode === userPass) {
                const token = jwtUtils.sign(result[0].id);
                res.token = token;
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
