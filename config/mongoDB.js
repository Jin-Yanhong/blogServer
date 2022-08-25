const { MongodBLink } = require('./appConfig');
const mongoose = require('mongoose');
const Mongoose = {
	connect() {
		mongoose.connect(MongodBLink, { useNewUrlParser: true }, (err) => {
			if (err) {
				console.log('Database connection failed');
				return;
			}
			console.log('Database connection succeeded');
		});
	},
};

module.exports = Mongoose;
