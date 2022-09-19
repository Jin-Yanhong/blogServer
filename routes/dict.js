const { centerRouter, handleRequest } = require('../utils/index');
const { queryDictById, createDict, getDictList, updateDict, deleteDictById, useDictByKey } = require('../controller/Dict');
const jwtUtils = require('../middleware/jwt');

// 新增字典
centerRouter.put(
	'/createDict',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { dict } = req.body;
		handleRequest(createDict(dict), res, { article });
	}
);

// 删除字典
centerRouter.delete(
	'/deleteDict/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let id = req?.params?.id;
		if (id) {
			handleRequest(deleteDictById(id), res);
		}
	}
);

// 更新字典
centerRouter.post(
	'/updateDict/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { id } = req.params;
		let { dict } = req.body;
		handleRequest(updateDict(id, dict), res, {
			args: { id, dict },
		});
	}
);

// 查询字典详情
centerRouter.get(
	'/getDictContent/:id',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let id = req?.params?.id;
		handleRequest(queryDictById(id), res, {
			args: { id },
		});
	}
);
// 获取字典列表
centerRouter.get(
	'/getDictList',
	function (req, res, next) {
		jwtUtils.verify(req, res, next);
	},
	function (req, res) {
		let { pageSize, pageNum } = req.query;
		handleRequest(getDictList(pageSize, pageNum), res, {
			args: { pageSize, pageNum },
		});
	}
);

// 使用字典
centerRouter.get('/useDict/:key', function (req, res) {
	let key = req?.params?.key;
	handleRequest(useDictByKey(key), res, { args: { key } });
});

module.exports = centerRouter;
