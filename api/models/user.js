const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema(
    {
        method: {
            type: String,
            enum: ['local', 'cac', 'github'],
            required: true
        },
        local: {
            email: {
                type: String,
                lowercase: true
            },
            password: {
                type: String
            }
        },
        cac: {
            distinguishedName: {
                type: String
            }
        },
        lastLoggedIn: {
            type: Date,
            default: Date.now
        },
        role: {
            type: String,
            default: 'loggedInUser'
        }
    },
    {
        timestamps: true
    }
);

schema.pre('save', async function (next) {
    try {
        if (this.method !== 'local') {
            next();
        }
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Generate a password hash (salt + hash)
        const passwordHash = await bcrypt.hash(this.local.password, salt);
        // Re-assign hashed version over original, plain text password
        this.local.password = passwordHash;
        next();
    } catch (error) {
        next(error);
    }
});

schema.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.local.password);
    } catch (error) {
        throw new Error(error);
    }
}

schema.statics.mapToNewOrExistingUser = async function (params) {
    let newOrExistingUser = null;
    const { distinguishedName } = params;
    const update = { expire: new Date() };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // create new user or update existing user
    newOrExistingUser = await this.findOneAndUpdate({ method: 'cac', 'cac.distinguishedName': distinguishedName }, update, options);
    newOrExistingUser.lastLoggedIn = new Date();
    const result = await newOrExistingUser.save();
    console.log('Certificate detected mapped to new or existing user ', result.id)
    return result;
}

schema.statics.mapToRandomUser = async function () {
    const firstUser = await this.findOne();
    if (firstUser) {
        console.log('No certificate detected but mapped to random user ', firstUser.id)
        return firstUser;
    } else {
        const message = 'No certificate detected.  Unable to map to random user since there are ZERO documents in the "users" collection';
        throw new Error(message);
    }
}

module.exports = mongoose.model('User', schema);