const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        distinguishedName: {
            type: String,
            required: true
        },
        lastLoggedIn: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

schema.statics.mapToNewOrExistingUser = function (params, success, fail) {
    const { distinguishedName } = params;
    const update = { expire: new Date() };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // create new user or update existing user
    this.findOneAndUpdate({ distinguishedName }, update, options)
        .then(newOrExistingUser => {
            newOrExistingUser.lastLoggedIn = new Date();
            newOrExistingUser.save()
                .then(result => {
                    success(result);
                });
        })
        .catch(err => fail(err.message));
}

schema.statics.mapToRandomUser = function (success, fail) {
    this.findOne()
        .then(firstUser => {
            if (firstUser) {
                console.log('mapped to random user ', firstUser._id)
                success(firstUser);
            } else {
                const message = 'Unable to assign random user since there are ZERO documents in the "users" collection';
                console.log(message);
                fail({ message });
            }
        })
        .catch(err => fail(err.message));
}

module.exports = mongoose.model('User', schema);