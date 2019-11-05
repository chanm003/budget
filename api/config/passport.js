const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const CustomStrategy = require('passport-custom').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
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
    usernameField: 'username'
}, async (username, password, done) => {
    try {
        // Find the user given the email
        const user = await User.findOne({ 'local.username': username });
        console.log(user)
        // If not, handle it
        if (!user) {
            return done(null, false);
        }

        // Check if the password is correct
        const isMatch = await user.isValidPassword(password);
        console.log(isMatch)
        // If not, handle it
        if (!isMatch) {
            return done(null, false);
        }

        // Otherwise, return the user
        user.lastLoggedIn = new Date();
        await user.save();
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

            const existingUser = await User.findOne({ 'cac.distinguishedName': distinguishedName });
            if (existingUser) {
                existingUser.lastLoggedIn = new Date();
                await existingUser.save();
                return done(null, existingUser)
            }

            const newUser = new User({
                method: 'cac',
                cac: {
                    distinguishedName
                }
            });

            await newUser.save();
            done(null, newUser);
        } catch (error) {
            done(error, false);
        }
    }
));

// GITHUB STRATEGY
passport.use(new GitHubStrategy({
    clientID: 'bc488231935c3b1a9cca',
    clientSecret: 'bfe241340409c5db158efb950a53c2d43c1fff05',
    callbackURL: 'https://localhost:8000/api/users/github',
    scope: ['user:email']
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            const existingUser = await User.findOne({ 'github.id': profile.id });
            if (existingUser) {
                existingUser.lastLoggedIn = new Date();
                await existingUser.save();
                return done(null, existingUser)
            }

            const newUser = new User({
                email: profile._json.email || '',
                method: 'github',
                github: {
                    id: profile.id
                }
            });

            await newUser.save();
            done(null, newUser);
        } catch (error) {
            done(error, false, error.message);
        }
    }
));


module.exports = {
    passportGithub: passport.authenticate('github', { session: false }),
    passportCacCertificate: passport.authenticate('parseCertificateFromHttpHeader', { session: false }),
    passportSignIn: passport.authenticate('local', { session: false }),
    passportJWT: passport.authenticate('jwt', { session: false })
}
