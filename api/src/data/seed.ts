import Chance from 'chance';
import {
    Directorate,
    DirectorateModel,
} from './entities/directorate/model';
import { User, UserModel } from './entities/user/model';
const { roleNames } = require('shared');
import { hashPassword } from '../config/password';

export async function seedDatabase() {
    const chance = new Chance();
    const password = await hashPassword('12345678');
    const defaultUser = await new UserModel({
        firstName: 'John',
        lastName: chance.last({ nationality: 'en' }),
        email: 'jdoe@gmail.com',
        method: 'local',
        local: {
            password,
        },
        role: roleNames.ADMIN,
    } as User).save();

    await DirectorateModel.create([
        {
            title: 'SOJ3',
            createdBy: defaultUser._id,
            updatedBy: defaultUser._id,
        },
        {
            title: 'SOJ6',
            createdBy: defaultUser._id,
            updatedBy: defaultUser._id,
        },
        {
            title: 'SOJ69',
            createdBy: defaultUser._id,
            updatedBy: defaultUser._id,
        },
    ] as Directorate[]);

    return {
        defaultUser: defaultUser,
    };
}
