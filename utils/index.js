// global router

const { failMsgCode, successMsgCode } = require('./constant.js');
const Redis = require('../config/redis');

function routerConfig(res, req, next) {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'accesstoken');
    next();
}
// 所有对数据修改的接口加上校验
// Router.put('*', function (req, res, next) {
// 	jwtUtils.verify(req, res, next);
// });

// Router.delete('*', function (req, res, next) {
// 	jwtUtils.verify(req, res, next);
// });

// // 排除登录
// Router.post('/user/[^login].*', function (req, res, next) {
// 	jwtUtils.verify(req, res, next);
// });

/**
 *
 * @param {Promise} taskPromise 查询任务
 * @param {Express.Response} response 响应体
 */
function handleRequest(taskPromise, response, { args = {}, callback = undefined } = {}) {
    if (args === undefined || args === null) {
        response.send({
            ...failMsgCode.params,
        });
        return;
    }
    try {
        taskPromise.then((data) => {
            if (callback) {
                callback(data);
            } else {
                response.send(successMsgCode(data));
            }
        });
    } catch (err) {
        response.send({
            ...failMsgCode.queryError,
            msg: failMsgCode.queryError.msg + err.message,
        });
    }
}

const redisFunction = {
    ping: 'ping',
    get: 'get',
    incr: 'incr',
    set: 'set',
};

/**
 *
 * @param { string } caseKey redis方法名称  ping | get | incr | set
 * @param { function } callback 成功回调
 * @param { object } argsObject redis方法所需参数
 */
function handleRedisFunction(caseKey, callback, { key, value }) {
    switch (caseKey) {
        case redisFunction.ping:
            Redis.ping()
                .then((result) => {
                    callback(result);
                })
                .catch((err) => {
                    console.log(`${caseKey} error`, err);
                });
            break;
        case redisFunction.get:
            Redis.get(key)
                .then((result) => {
                    callback(result);
                })
                .catch((err) => {
                    console.log(`${caseKey} error`, err);
                });
            break;
        case redisFunction.incr:
            Redis.incr(key)
                .then((result) => {
                    callback(result);
                })
                .catch((err) => {
                    console.log(`${caseKey} error`, err);
                });
            break;
        case redisFunction.set:
            Redis.set(`${key}`, JSON.stringify(value))
                .then((result) => {
                    callback(result);
                })
                .catch((err) => {
                    console.log(`${caseKey} error`, err);
                });
            break;
        default:
            new Promise((resolve) => {
                resolve({});
            })
                .then((result) => {
                    callback(result);
                })
                .catch((err) => {
                    console.log(`${caseKey} error`, err);
                });
            break;
    }
}

// 部分导出错误处理
module.exports = {
    routerConfig,
    redisFunction,
    handleRedisFunction,
    handleRequest,
};
