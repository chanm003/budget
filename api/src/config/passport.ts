import passport from 'passport';
import passportJWT from 'passport-jwt';
import passportLocal from 'passport-local';
import passportGithub from 'passport-github';
import passportCustom from 'passport-custom';
import { Request, Response, NextFunction } from 'express';

const {
    validationSchemas: {
        User: {
            yupSchemas: { loginSchema },
        },
    },
} = require('shared');

import keys from './keys';
import { UserModel } from '../data/entities/user/model';
import { isValidPassword } from './password';

// JSON WEB TOKENS STRATEGY
passport.use(
    new passportJWT.Strategy(
        {
            jwtFromRequest: passportJWT.ExtractJwt.fromHeader(
                'authorization',
            ),
            secretOrKey: keys.jsonWebTokenSecret,
        },
        async (payload, done) => {
            try {
                done(null, payload.user);
            } catch (error) {
                done(error, false);
            }
        },
    ),
);

// LOCAL STRATEGY
passport.use(
    new passportLocal.Strategy(
        {
            usernameField: 'email',
        },
        async (email, password, done) => {
            try {
                await loginSchema.validate({ email, password });

                const user = await UserModel.findOne({
                    email: email,
                    method: 'local',
                });

                if (!user) {
                    // no account for that email
                    return done(
                        { message: 'Invalid credentials' },
                        false,
                    );
                }

                const isMatch = await isValidPassword(user, password);
                if (!isMatch) {
                    // account exists for that user but invalid password
                    return done(
                        { message: 'Invalid credentials' },
                        false,
                    );
                }

                // Otherwise, return the user
                user.lastLoggedIn = new Date();
                await user.save();
                done(null, user);
            } catch (error) {
                done(error, false);
            }
        },
    ),
);

// CERTIFICATE STRATEGY
passport.use(
    'parseCertificateFromHttpHeader',
    new passportCustom.Strategy(async function(req, done) {
        try {
            const distinguishedName = req.headers['x-subject-dn'];

            // no certificate in header
            if (!distinguishedName) {
                return done(null, false);
            }

            const existingUser = await UserModel.findOne({
                'cac.distinguishedName': distinguishedName,
            });
            if (existingUser) {
                existingUser.lastLoggedIn = new Date();
                await existingUser.save();
                return done(null, existingUser);
            }

            const newUser = new UserModel({
                method: 'cac',
                cac: {
                    distinguishedName,
                },
            });

            await newUser.save();
            done(null, newUser);
        } catch (error) {
            done(error, null);
        }
    }),
);

// GITHUB STRATEGY
passport.use(
    new passportGithub.Strategy(
        {
            clientID: 'bc488231935c3b1a9cca',
            clientSecret: 'bfe241340409c5db158efb950a53c2d43c1fff05',
            callbackURL: 'https://localhost:8000/api/users/github',
            scope: ['user:email'],
        },
        async function(accessToken, refreshToken, profile, done) {
            try {
                const existingUser = await UserModel.findOne({
                    'github.id': profile.id,
                });
                if (existingUser) {
                    existingUser.lastLoggedIn = new Date();
                    await existingUser.save();
                    return done(null, existingUser);
                }

                const newUser = new UserModel({
                    method: 'github',
                    github: {
                        id: profile.id,
                    },
                });

                await newUser.save();
                done(null, newUser);
            } catch (error) {
                done(error);
            }
        },
    ),
);

export const strategies = {
    github: passport.authenticate('github', {
        session: false,
    }),
    cacCertificate: passport.authenticate(
        'parseCertificateFromHttpHeader',
        { session: false },
    ),
    local: (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('local', { session: false }, function(
            err,
            user,
            info,
        ) {
            if (err) {
                return res.status(401).send({ error: err });
            }
            req.user = user;
            next();
        })(req, res, next);
    },
    jwt: passport.authenticate('jwt', { session: false }),
};
