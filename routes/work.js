const jwtUtils = require('../middleware/jwt');
const { getWorkList, createWork, updateWork, queryWorkById, deleteWork } = require('../controller/work');
const { centerRouter, handleRequest } = require('../utils/index');

// 新增作品
centerRouter.put(
    '/createWork',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let work = req.body.work;
        handleRequest(createWork(work), res, { args: { work } });
    }
);

// 删除作品
centerRouter.delete(
    '/deleteWork/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        handleRequest(deleteWork(id), res, { args: { id } });
    }
);

// 修改作品
centerRouter.post(
    '/updateWork/:id',
    function (req, res, next) {
        jwtUtils.verify(req, res, next);
    },
    function (req, res) {
        let id = req?.params?.id;
        let work = req.body.work;
        handleRequest(updateWork(id, work), res, { args: { id, work } });
    }
);

// 获取作品详情
centerRouter.get('/getWorkDetail/:id', function (req, res) {
    let id = req?.params?.id;
    handleRequest(queryWorkById(id), res, { args: { id } });
});

// 获取作品详情
centerRouter.get('/getWorkList', function (req, res, next) {
    let { pageSize, pageNum } = req.query;
    handleRequest(getWorkList(pageSize, pageNum), res, { args: { pageSize, pageNum } });
});

module.exports = centerRouter;
