const mongoose = require('mongoose');

module.exports = function (success, err) {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connection.on("error", error => {
        console.log("Database connection error:", error);
    });

    mongoose.connection.once("open", () => {
        console.log("Connected to Database!");
    });

    mongoose.connect('mongodb://mongodb:27017/budget', { useNewUrlParser: true })
        .then(() => {
            success();
        })
        .catch(err => {
            err(err);
        });
}