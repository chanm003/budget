const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { jsonWebTokenSecret } = require('../config/keys');

signToken = user => {
    return jwt.sign({ user }, jsonWebTokenSecret, { expiresIn: "5m" })
}

module.exports = {
    signup_emailPassword: async (req, res, next) => {
        const { email, password } = req.body;

        // Check if account already exists
        const foundUser = await User.findOne({ email: email, method: 'local' });
        if (foundUser) {
            return res.status(403).json({ error: 'Email is already in use' });
        }

        // Hash password
        const hashedPassword = await User.hashPassword(password);

        // Create a new user
        const newUser = new User({
            email,
            method: 'local',
            local: {
                password: hashedPassword
            }
        });
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
    },
    generateTokenView: async (req, res, next) => {
        // Generate token
        const token = signToken(req.user);
        res.render('set-jwt', { user: req.user, token });
    }
}