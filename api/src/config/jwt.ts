import jwt from 'jsonwebtoken';

import keys from './keys';
import { User } from '../data/entities/user/model';

export const signToken = (user: User) => {
    return jwt.sign({ user }, keys.jsonWebTokenSecret, {
        expiresIn: '15m',
    });
};

export const verifyToken = (token: string) => {
    const result = jwt.verify(
        token,
        keys.jsonWebTokenSecret,
    ) as JwtTokenVerificationResult;
    return result;
};

export interface JwtTokenVerificationResult {
    user: User;
    iat: number;
    exp: number;
}
