const mongoose = require('mongoose');
const insertData = (dataToSeed) => {
    mongoose.connect('mongodb://mongodb:27017/budget', { useNewUrlParser: true })
        .then(() => {

            let done = 0;
            dataToSeed.forEach(item => {
                item.save((err, result) => {
                    done++;
                    if (done === dataToSeed.length) {
                        mongoose.disconnect();
                    }
                });
            })

        })
        .catch(err => console.log(err));
}

module.exports = {
    insertData
}