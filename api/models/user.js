const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        distinguishedName: {
            type: String,
            required: true,
            index: true
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

schema.statics.mapToNewOrExistingUser = async function (params) {
    let newOrExistingUser = null;
    const { distinguishedName } = params;
    const update = { expire: new Date() };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // create new user or update existing user
    newOrExistingUser = await this.findOneAndUpdate({ distinguishedName }, update, options);
    newOrExistingUser.lastLoggedIn = new Date();
    const result = await newOrExistingUser.save();
    console.log('Certificate detected mapped to new or existing user ', result)
    return result;
}

schema.statics.mapToRandomUser = async function () {
    const firstUser = await this.findOne();
    if (firstUser) {
        console.log('No certificate detected but mapped to random user ', firstUser)
        return firstUser;
    } else {
        const message = 'No certificate detected.  Unable to map to random user since there are ZERO documents in the "users" collection';
        throw new Error(message);
    }
}

module.exports = mongoose.model('User', schema);