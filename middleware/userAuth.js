const jwtUtils = require('./jwt');
const { failMsgCode, successMsgCode } = require('../utils/constant');
const { getUserList } = require('../controller/user');
const CryptoJsUtils = require('../utils/crypto');

const auth = {
    verifyLogin: async (req, res, next) => {
        let { password, user_name } = req.body;
        if (!password || !user_name) {
            res.send(failMsgCode.params);
            return;
        }
        const result = await getUserList({ user_name }, { password: 1 }, { limit: 1 });
        if (result.length === 1) {
            let userPass = result[0].password;

            let encode = CryptoJsUtils.encode(password).toString();

            if (encode === userPass) {
                const token = jwtUtils.sign(result[0].id);
                res.send(successMsgCode({ accessToken: token }));
            } else {
                res.send(failMsgCode.userPasswordError);
            }
            if (next) {
                next();
            }
        } else {
            res.send(failMsgCode.userNotFound);
        }
    },
    verifyAuth: () => {},
};

module.exports = auth;
