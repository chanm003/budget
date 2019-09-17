const CustomStrategy = require('passport-custom').Strategy;
const session = require('express-session');
const passport = require('passport');

const { sessionKey } = require('./keys');

// export helper function that app.js can invoke
module.exports = function (app) {
    passport.use('parseHttpHeader', new CustomStrategy(
        function (req, callback) {
            console.log('Verification callback runs everytime passport.authenticate is invoked')
            callback(null, { id: 1, name: 'Mike' });
        }
    ));

    passport.serializeUser((user, done) => {
        console.log('Serialization callback...runs ONCE when user successfully verifies')
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        console.log('Deserialize function...runs after every HTTP request AFTER user has authenticated')
        done(null, { id: 1, name: 'Mike' });
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