import bcrypt from 'bcryptjs';
import { User } from '../data/entities/user/model';

export const hashPassword = async (plaintext: string) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(plaintext, salt);
        return passwordHash;
    } catch (error) {
        throw new Error(error);
    }
};

export const isValidPassword = async (
    user: User,
    candidatePassword: string,
) => {
    try {
        return await bcrypt.compare(
            candidatePassword,
            user.local?.password || '',
        );
    } catch (error) {
        throw new Error(error);
    }
};
