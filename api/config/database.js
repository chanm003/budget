const mongoose = require('mongoose');
const { modelNames } = require('shared')

const models = {};
modelNames.forEach(modelName => {
    // import each file, that is responsible for creating and register mongoose models
    models[modelName] = require(`../models/${modelName}/model`);
})

module.exports = {
    connectToDatabase: function (success, err) {
        const connectOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }

        mongoose.connection.on("error", error => {
            console.log("Database connection error:", error);
        });

        mongoose.connection.once("open", () => {
            console.log("Connected to Database!");
        });

        mongoose.connect('mongodb://mongodb:27017/budget', connectOptions)
            .then(() => {
                success();
            })
            .catch(err => {
                err(err);
            });
    },
    models
}