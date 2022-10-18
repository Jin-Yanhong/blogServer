const jwtUtils = require('../middleware/jwt');
const { centerRouter, handleRequest /* handleRedisFunction */ } = require('../utils/index');
const { getSystemConfigList, updateSystemConfig } = require('../controller/system');

// 获取系统配置
centerRouter.post('/getSystemConfig', function (req, res) {
    let condition = req.body;
    handleRequest(getSystemConfigList(condition), res, { args: { condition } });
});

// 获取系统配置
centerRouter.post(
    '/updateSystemConfig/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let docs = req.body;
        let id = req.params;
        // TODO: 多个配置只允许有一个当前正在使用的配置项 isActive == true
        handleRequest(updateSystemConfig(id, docs), res, { args: { id, doc } });
    }
);

module.exports = centerRouter;
