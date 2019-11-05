const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            lowercase: true,
            default: ''
        },
        method: {
            type: String,
            enum: ['local', 'cac', 'github'],
            required: true
        },
        local: {
            username: {
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
        github: {
            id: {
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

schema.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.local.password);
    } catch (error) {
        throw new Error(error);
    }
}

schema.statics.hashPassword = async function (plaintext) {
    try {
        const salt = await bcrypt.genSalt(10);
        // Generate a password hash (salt + hash)
        const passwordHash = await bcrypt.hash(plaintext, salt);
        return passwordHash;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = mongoose.model('User', schema);