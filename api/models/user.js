const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    distinguishedName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', schema);