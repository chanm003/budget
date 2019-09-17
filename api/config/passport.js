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
                User.mapToNewOrExistingUser(
                    { distinguishedName },
                    user => callback(null, user),
                    err => callback(null, false, { err })
                );
            } else {
                if (isDevelopmentMode) {
                    console.log('DEV MODE no DN found in request header');
                    User.mapToRandomUser(
                        user => callback(null, user),
                        err => callback(null, false)
                    );
                } else {
                    console.log('PROD MODE no DN found in ');
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

    app.use((req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            console.log('Authenticate function invoked imperatively');
            require('passport').authenticate('parseHttpHeader')(req, res, next);
        }
    })
}