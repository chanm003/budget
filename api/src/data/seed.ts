<<<<<<< HEAD
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
=======
import { Recipe, RecipeModel } from './entities/recipe';
import { User, UserModel } from './entities/user';

export async function seedDatabase() {
    const defaultUser = await new UserModel({
        email: 'test@github.com',
        nickname: 'MichalLytek',
        password: 's3cr3tp4ssw0rd',
    } as User).save();

    await RecipeModel.create([
        {
            title: 'Recipe 1',
            description: 'Desc 1',
            author: defaultUser._id,
            ratings: [
                { value: 2, user: defaultUser._id },
                { value: 4, user: defaultUser._id },
                { value: 5, user: defaultUser._id },
                { value: 3, user: defaultUser._id },
                { value: 4, user: defaultUser._id },
            ],
        },
        {
            title: 'Recipe 2',
            author: defaultUser._id,
            ratings: [
                { value: 2, user: defaultUser },
                { value: 4, user: defaultUser },
            ],
        },
    ] as Recipe[]);

    return {
        defaultUser,
>>>>>>> 444d4e8372c3eb3ed71a021a0144e92f9907bbfc
    };
}
