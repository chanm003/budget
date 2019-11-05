const router = require('express-promise-router')();
const { passportSignIn, passportJWT, passportCacCertificate, passportGithub } = require('../config/passport')
const UsersController = require('../controllers/users');


router.route('/signup_emailPassword')
    .post(UsersController.signup_emailPassword);

router.route('/signin_emailPassword')
    .post(passportSignIn, UsersController.generateToken);

router.route('/signin_cac')
    .get(passportCacCertificate, UsersController.generateToken)

router.route('/github')
    .get(passportGithub, UsersController.generateToken)

router.route('/protected')
    .get(passportJWT, async (req, res, next) => {
        console.log('I managed to get here!');
        res.json({ secret: "resource" });
    });

module.exports = router;