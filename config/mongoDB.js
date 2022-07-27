const mongoose = require("mongoose");
const Mongoose = {
    url: "mongodb://localhost:27017/blog",
    connect() {
        mongoose.connect(this.url, { useNewUrlParser: true }, (err) => {
            if (err) {
                console.log("Database connection failed");
                return;
            }
            console.log("Database connection succeeded");
        });
    },
};

module.exports = Mongoose;
