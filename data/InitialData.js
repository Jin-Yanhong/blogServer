/*******************************************************************************************/
// 文章数据

let date = new Date();
let dateStr = `${date.getFullYear()} / ${
	date.getMonth() + 1
} / ${date.getDate()}`;

db.createCollection('articles');

let article = [
	{
		title: 'Here is the title of article 1',
		subTitle: 'Here is the subTitle of article 1',
		date: dateStr,
		author: 'Mr.King',
		summary: 'Here is the summary of article 1',
		content: 'Here is the content of article 1',
	},
	{
		title: 'Here is the title of article 2',
		subTitle: 'Here is the subTitle of article 2',
		date: dateStr,
		author: 'Mr.King',
		summary: 'Here is the summary of article 2',
		content: 'Here is the content of article 2',
	},
];

db.getCollection('articles').insertMany([article]);

/*******************************************************************************************/
// 足迹数据

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

db.createCollection('projects');

db.getCollection('projects').insertMany([
	{
		name: '个人博客系统',
		desc: '这是个项目描述介绍。',
		tag: ['大屏'],
		technology: ['vue', 'react'],
		screenShortUrl: 'http://localhost:3000/uploadFile/work.jpg',
	},
	{
		name: '智慧病例',
		desc: '这是个项目描述介绍。',
		tag: ['大屏'],
		technology: ['vue', 'react'],
		screenShortUrl: 'http://localhost:3000/uploadFile/work.jpg',
	},
	{
		name: '智慧城市',
		desc: '这是个项目描述介绍。',
		tag: ['大屏'],
		technology: ['vue', 'react'],
		screenShortUrl: 'http://localhost:3000/uploadFile/work.jpg',
	},
]);

/*******************************************************************************************/
// 个人技能数据

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

db.createCollection('system_configs');

db.getCollection('system_configs').insertOne({
	copyright: '©jin-yanhong  All Right Reserved 2022',
	contactInfo: {
		address: '甘肃省兰州市城关区',
		phone: '15593174360',
		email: 'jin-yanhong@foxmail.com',
	},
});

/*******************************************************************************************/