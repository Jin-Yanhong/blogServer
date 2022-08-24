db.createCollection('foot_prints');

db.getCollection('foot_prints').insertMany([
	{ city: '青岛', lanLong: [120.389366, 36.149514], label: '求学' },
	{ city: '重庆', lanLong: [106.051525, 29.847747], label: '蜕变' },
	{ city: '日喀则', lanLong: [88.930483, 27.426039], label: '蜕变' },
	{ city: '林芝', lanLong: [94.249021, 29.749585], label: '蜕变' },
	{ city: '拉萨', lanLong: [91.118463, 29.654471], label: '旅行' },
	{ city: '成都', lanLong: [103.951229, 30.559807], label: '归途' },
	{ city: '西安', lanLong: [108.955044, 34.224199], label: '坐班' },
	{ city: '石家庄', lanLong: [114.440247, 38.04189], label: '出差' },
	{ city: '西宁', lanLong: [101.814362, 36.620233], label: '旅行' },
	{ city: '兰州', lanLong: [103.825866, 36.053945], label: '终点' },
	{ city: '乌鲁木齐', lanLong: [87.479758, 43.905817], label: '终点' },
]);
