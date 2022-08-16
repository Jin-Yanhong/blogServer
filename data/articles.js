// db.createCollection('articles');
let date = new Date();
let dateStr = `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`;

let article = {
	title: 'Here is the title of article',
	subTitle: 'Here is the subTitle of article',
	date: dateStr,
	author: 'Mr.King',
	summary: 'Here is the summary of article',
	content: 'Here is the content of article',
};

let output = '';

const articleCount = 20;

for (let i = 0; i < articleCount; i++) {
	output += `db.getCollection('articles').insertOne({
		title: '${article.title} ${i + 1}',
		subTitle: '${article.subTitle} ${i + 1}',
		date: '${dateStr}',
		author: 'Mr.King',
		summary: '${article.summary} ${i + 1}',
		content: '${article.content} ${i + 1}',
})\n`;
}

console.log(output);
