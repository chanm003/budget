const CustomStrategy = require('passport-custom').Strategy;
const session = require('express-session');
const passport = require('passport');

const User = require('../models/user');
const { isDevelopmentMode, sessionKey } = require('./keys');

// export helper function that app.js can invoke
module.exports = function (app) {
    passport.use('parseHttpHeader', new CustomStrategy(
        function (req, callback) {
            const distinguishedName = req.headers['x-subject-dn'];
            if (distinguishedName) {
                // try to match distinguished name in req header to existing user in the database
                // if unable to find match, "register" the user by creating a new user in the database
                User.mapToNewOrExistingUser(
                    { distinguishedName },
                    user => callback(null, user),
                    err => callback(null, false, { err })
                );
            } else {
                if (isDevelopmentMode) {
                    // DEV so if no distinguished name in req header, auto login as the first user in database
                    User.mapToRandomUser(
                        user => callback(null, user),
                        err => callback(null, false)
                    );
                } else {
                    // PROD so there MUST be a distinguished name in req header
                    callback(null, false);
                }
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    })

    passport.deserializeUser((_id, done) => {
        User.findById(_id)
            .then(user => done(null, user));
    })

    // middleware for Session
    app.use(session({
        secret: sessionKey,
        resave: false,
        saveUninitialized: true
    }));

    // middleware for Passport
    app.use(passport.initialize());
    app.use(passport.session());

    // custom middleware
    app.use((req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            console.log('Triggering chain of Passport authentication events');
            require('passport').authenticate('parseHttpHeader')(req, res, next);
        }
    })
}