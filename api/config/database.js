const mongoose = require('mongoose');
const fs = require('fs')
const { join } = require('path')

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

const folderNames = getDirectories(join(__dirname, '../models'));

const models = {};
folderNames.forEach(modelName => {
    // import each file, that is responsible for creating and register mongoose models
    models[modelName] = require(`../models/${modelName}/model`);
})

module.exports = {
    connectToDatabase: function (success, err) {
        mongoose.set('useFindAndModify', false);
        mongoose.set('useUnifiedTopology', true);

        mongoose.connection.on("error", error => {
            console.log("Database connection error:", error);
        });

        mongoose.connection.once("open", () => {
            console.log("Connected to Database!");
        });

        mongoose.connect('mongodb://mongodb:27017/budget', { useNewUrlParser: true, useCreateIndex: true })
            .then(() => {
                success();
            })
            .catch(err => {
                err(err);
            });
    },
    models
}