const { validationSchemas: { User: { yupSchemas: { registrationSchema } } } } = require('shared');

const User = require('../models/user');
const { signToken } = require('../config/jwt');

module.exports = {
    signup_emailPassword: async (req, res, next) => {
        try {
            const { email, password, passwordConfirm } = req.body;

            await registrationSchema.validate({ email, password, passwordConfirm });

            // Check if account already exists
            const foundUser = await User.findOne({ email: email, method: 'local' });
            if (foundUser) {
                return res.status(403).json({ error: { message: 'Email is already in use' } });
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
        } catch (err) {
            res.status(401).send({ error: err });
        }
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