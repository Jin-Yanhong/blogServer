// db.createCollection('foot_prints');
let points = [
	{ name: '青岛', LonLat: [120.389366, 36.149514], label: '求学' },
	{ name: '重庆', LonLat: [106.051525, 29.847747], label: '蜕变' },
	{ name: '日喀则', LonLat: [88.930483, 27.426039], label: '蜕变' },
	{ name: '林芝', LonLat: [94.249021, 29.749585], label: '蜕变' },
	{ name: '拉萨', LonLat: [91.118463, 29.654471], label: '旅行' },
	{ name: '成都', LonLat: [103.951229, 30.559807], label: '归途' },
	{ name: '西安', LonLat: [108.955044, 34.224199], label: '坐班' },
	{ name: '石家庄', LonLat: [114.440247, 38.04189], label: '出差' },
	{ name: '西宁', LonLat: [101.814362, 36.620233], label: '旅行' },
	{ name: '兰州', LonLat: [103.825866, 36.053945], label: '终点' },
	{ name: '乌鲁木齐', LonLat: [87.479758, 43.905817], label: '终点' },
];
let output = '';
for (let i = 0; i < points.length; i++) {
	let el = points[i];
	output += `db.getCollection('foot_prints').insertOne({
		city: '${el.name}',
		lanLong: [${el.LonLat}],
		label: '${el.label}',
});\n`;
}

console.log(output);
