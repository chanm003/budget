const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { jsonWebTokenSecret } = require('../config/keys');

signToken = user => {
    return jwt.sign({ user }, jsonWebTokenSecret, { expiresIn: "5m" })
}

module.exports = {
    signup_emailPassword: async (req, res, next) => {
        const { email, password } = req.body;

        // Check if there is a user with the same email
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email is already in use' });
        }

        // Create a new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Generate the token
        const token = signToken(newUser);

        // Respond with token
        res.status(200).json({ user: newUser, token });
    },
    generateToken: async (req, res, next) => {
        // Generate token
        const token = signToken(req.user);
        res.status(200).json({ user: req.user, token });
    }
}