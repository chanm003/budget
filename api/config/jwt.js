const jwt = require('jsonwebtoken');
const { jsonWebTokenSecret } = require('./keys');

const signToken = user => {
    return jwt.sign({ user }, jsonWebTokenSecret, { expiresIn: "15m" })
}

const verifyToken = token => {
    const result = jwt.verify(token, jsonWebTokenSecret);
    return result;
}

module.exports = {
    signToken,
    verifyToken
}