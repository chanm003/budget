const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const CustomStrategy = require('passport-custom').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { isDevelopmentMode, jsonWebTokenSecret } = require('./keys');
const User = require('../models/user')

// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: jsonWebTokenSecret
}, async (payload, done) => {
    try {
        done(null, payload.user);
    } catch (error) {
        done(error, false);
    }
}));

// LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        // Find the user given the email
        const user = await User.findOne({ email });

        // If not, handle it
        if (!user) {
            return done(null, false);
        }

        // Check if the password is correct
        const isMatch = await user.isValidPassword(password);

        // If not, handle it
        if (!isMatch) {
            return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));

// CERTIFICATE STRATEGY
passport.use('parseCertificateFromHttpHeader', new CustomStrategy(
    async function (req, done) {
        try {
            const distinguishedName = req.headers['x-subject-dn'];

            // no certificate in header
            if (!distinguishedName) {
                return done(null, false);
            }

            const user = await User.mapToNewOrExistingUser({ distinguishedName });
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
));

module.exports = {
    passportCacCertificate: passport.authenticate('parseCertificateFromHttpHeader', { session: false }),
    passportSignIn: passport.authenticate('local', { session: false }),
    passportJWT: passport.authenticate('jwt', { session: false })
}
