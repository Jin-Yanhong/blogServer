/*******************************************************************************************/
// 文章数据
db.getCollection('articles').drop();

db.createCollection('articles');

db.getCollection('articles').insertMany([
	{
		title: '我对前端工作的理解',
		subTitle: 'Here is the subTitle of article 1',
		date: '2022 / 9 / 6',
		author: 'Mr.King',
		index: 1,
		groupId: 1,
		content: 'Here is the content of article 1',
	},
	{
		title: '我对前端现状的认识',
		subTitle: 'Here is the subTitle of article 2',
		date: '2022 / 9 / 6',
		author: 'Mr.King',
		index: 2,
		groupId: 1,
		content: 'Here is the content of article 2',
	},
]);

/*******************************************************************************************/
// 字典数据

db.getCollection('dicts').drop();

db.createCollection('dicts');

db.getCollection('dicts').insertMany([
	{
		key: 1,
		label: '技术栈',
		index: 1,
		desc: '项目行业、应用大致分类',
		value: [
			{ label: 'HTML', value: 1 },
			{ label: 'CSS', value: 2 },
			{ label: 'JavaScript', value: 3 },
			{ label: 'React', value: 4 },
			{ label: 'Vue', value: 5 },
			{ label: 'TypeScript', value: 6 },
			{ label: 'Java', value: 7 },
			{ label: 'Python', value: 8 },
			{ label: 'OpenLayers', value: 9 },
			{ label: 'three', value: 10 },
			{ label: 'SSR', value: 11 },
			{ label: 'Node', value: 12 },
			{ label: 'Express', value: 13 },
			{ label: 'MongoDB', value: 14 },
			{ label: 'MySQL', value: 15 },
			{ label: 'Java', value: 16 },
			{ label: 'Python', value: 17 },
			{ label: 'Auto-Testing', value: 18 },
		],
	},
	{
		key: 2,
		label: '项目应用类型',
		index: 2,
		desc: '实际项目中过程中所用到的技术栈',
		value: [
			{ label: '国产地图', value: 1 },
			{ label: '大屏', value: 2 },
			{ label: '智慧应用', value: 3 },
			{ label: '数据分析', value: 4 },
		],
	},
]);

/*******************************************************************************************/
// 用户数据

db.getCollection('users').drop();

db.createCollection('users');

db.getCollection('users').insertMany([{ user_name: 'admin', password: 'admin', _id: 'adminno1' }]);

/*******************************************************************************************/
// 足迹数据
db.getCollection('foot_prints').drop();

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

/*******************************************************************************************/
// 项目数据
db.getCollection('works').drop();

db.createCollection('works');

db.getCollection('works').insertMany([
	{
		index: 1,
		name: '个人网站',
		desc: '这是个项目描述介绍。',
		tag: ['响应式', '前后端分离'],
		technology: ['React', 'TypeScript'],
		screenShortUrl: 'http://localhost:3000/uploadFile/work.jpg',
	},
	{
		index: 2,
		name: '智慧社区',
		desc: '这是个项目描述介绍。',
		tag: ['大屏', '国产地图'],
		technology: ['vue', 'react'],
		screenShortUrl: 'http://localhost:3000/uploadFile/work.jpg',
	},
	{
		index: 3,
		name: '智慧城市',
		desc: '这是个项目描述介绍。',
		tag: ['大屏', '国产地图'],
		technology: ['vue', 'react'],
		screenShortUrl: 'http://localhost:3000/uploadFile/work.jpg',
	},
]);

/*******************************************************************************************/
// 个人技能数据
db.getCollection('skills').drop();

db.createCollection('skills');

db.getCollection('skills').insertMany([
	{ index: 1, name: 'HTML', score: 80, color: '#1266c9' },
	{ index: 2, name: 'CSS', score: 80, color: '#1266c9' },
	{ index: 3, name: 'JavaScript', score: 80, color: '#1266c9' },
	{ index: 4, name: 'React.js', score: 80, color: '#1266c9' },
	{ index: 5, name: 'Vue.js', score: 80, color: '#1266c9' },
	{ index: 6, name: 'TypeScript', score: 80, color: '#1266c9' },
	{ index: 7, name: 'Node', score: 80, color: '#1266c9' },
	{ index: 8, name: 'Express', score: 80, color: '#1266c9' },
	{ index: 9, name: 'MongoDB', score: 80, color: '#1266c9' },
	{ index: 10, name: 'MySQL', score: 80, color: '#1266c9' },
	{ index: 11, name: 'Java', score: 80, color: '#1266c9' },
	{ index: 12, name: 'Python', score: 80, color: '#1266c9' },
	{ index: 13, name: 'OpenLayers', score: 80, color: '#1266c9' },
	{ index: 14, name: 'three.js', score: 80, color: '#1266c9' },
	{ index: 15, name: 'SSR', score: 80, color: '#1266c9' },
	{ index: 16, name: 'Auto-Testing', score: 80, color: '#1266c9' },
]);

/*******************************************************************************************/
// 系统配置数据
db.getCollection('system_configs').drop();

db.createCollection('system_configs');

db.getCollection('system_configs').insertOne({
	copyright: '© jin-yanhong All Right Reserved 2022',
	contactInfo: {
		address: '甘肃省兰州市城关区南关什字亚欧国际3310室',
		phone: '15593174360',
		email: 'jin-yanhong@foxmail.com',
	},
	lanLong: [103.827317, 36.0539],
	isActive: true,
});

/*******************************************************************************************/

