import ExpressPromiseRouter from 'express-promise-router';

const router = ExpressPromiseRouter();

import { strategies } from '../config/passport';
import { routeHandlers } from '../controllers/users';

router
    .route('/signup_emailPassword')
    .post(routeHandlers.signup_emailPassword);

router
    .route('/signin_emailPassword')
    .post(strategies.local, routeHandlers.generateToken);

router
    .route('/signin_cac')
    .get(strategies.cacCertificate, routeHandlers.generateToken);

router
    .route('/github')
    .get(strategies.github, routeHandlers.generateTokenView);

router
    .route('/protected')
    .get(strategies.jwt, async (req, res, next) => {
        console.log('I managed to get here!');
        res.json({ secret: 'resource' });
    });

export default router;
