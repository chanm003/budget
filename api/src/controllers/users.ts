import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const { validationSchemas } = require('shared');

import { User, UserModel } from '../data/entities/user/model';
import keys from '../config/keys';
import { hashPassword } from '../config/password';

const signToken = (user: User) => {
    return jwt.sign({ user }, keys.jsonWebTokenSecret, {
        expiresIn: '5m',
    });
};

export const routeHandlers = {
    signup_emailPassword: async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const { email, password, passwordConfirm } = req.body;

            console.log(validationSchemas);

            await validationSchemas.User.yupSchemas.registrationSchema.validate(
                {
                    email,
                    password,
                    passwordConfirm,
                },
            );

            console.log('validated');

            // Check if account already exists
            const foundUser = await UserModel.findOne({
                email: email,
                method: 'local',
            });
            if (foundUser) {
                return res.status(403).json({
                    error: { message: 'Email is already in use' },
                });
            }

            // Hash password
            const hashedPassword = await hashPassword(password);

            // Create a new user
            const newUser = new UserModel({
                email,
                method: 'local',
                local: {
                    password: hashedPassword,
                },
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
    generateToken: async (
        req: any,
        res: Response,
        next: NextFunction,
    ) => {
        // Generate token
        const token = signToken(req.user);
        res.status(200).json({ user: req.user, token });
    },
    generateTokenView: async (
        req: any,
        res: Response,
        next: NextFunction,
    ) => {
        // Generate token
        const token = signToken(req.user);
        res.render('set-jwt', { user: req.user, token });
    },
};
