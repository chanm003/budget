import Chance from 'chance';
import _ from 'lodash';
import {
    Directorate,
    DirectorateModel,
} from './entities/directorate/model';
import { Program, ProgramModel } from './entities/program/model';
import { User, UserModel } from './entities/user/model';
const { roleNames } = require('shared');
import { hashPassword } from '../config/password';

const chance = new Chance();

export async function seedDatabase() {
    const defaultUser = await createFirstUser();
    const directorates = await createDirectorates(defaultUser);
    const programs = await createPrograms(defaultUser);

    return {
        user: defaultUser,
        directorates,
        programs,
    };
}

async function createDirectorates(user: User) {
    return await DirectorateModel.create([
        {
            title: 'SOJ3',
            createdBy: user._id,
            updatedBy: user._id,
        },
        {
            title: 'SOJ6',
            createdBy: user._id,
            updatedBy: user._id,
        },
        {
            title: 'SOJ69',
            createdBy: user._id,
            updatedBy: user._id,
        },
    ] as Directorate[]);
}

async function createFirstUser() {
    const password = await hashPassword('12345678');
    return await new UserModel({
        firstName: 'John',
        lastName: chance.last({ nationality: 'en' }),
        email: 'jdoe@gmail.com',
        method: 'local',
        local: {
            password,
        },
        role: roleNames.ADMIN,
    } as User).save();
}

async function createPrograms(user: User) {
    let itemsToCreate: Partial<Program>[] = [];

    _.times(3, () => {
        itemsToCreate.push({
            title: `Program-${chance.radio()}`,
            createdBy: user._id,
            updatedBy: user._id,
        });
    });

    return (await ProgramModel.create(itemsToCreate)) as Program[];
}
