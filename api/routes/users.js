const router = require('express-promise-router')();
const passport = require('passport');

const UsersController = require('../controllers/users');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
    .post(UsersController.signUp);

module.exports = router;