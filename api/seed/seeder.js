const Promise = require('promise');
const mongoose = require('mongoose');
const insertData = (dataToSeed) => {
    return new Promise((fulfill, reject) => {
        mongoose.connect('mongodb://mongodb:27017/budget', { useNewUrlParser: true })
            .then(() => {

                let done = 0;
                const results = [];
                dataToSeed.forEach(item => {
                    item.save((err, result) => {
                        results.push(result);
                        done++;
                        if (done === dataToSeed.length) {
                            mongoose.disconnect();
                            fulfill(results);
                        }
                    });
                })

            })
            .catch(err => reject(err));
    });
}

module.exports = {
    insertData
}