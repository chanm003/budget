/**
 * On WINDOWS EXECUTE IN GIT BASH as administrator:
 *      winpty docker exec -it budget_api_1 //bin//sh (on Linux docker exec -it budget_api_1 sh )
 *      cd seed
 *      node dataToSeed.js
 */
var chance = require('chance').Chance();
const seeder = require('./seeder');
const Directorate = require('../models/Directorate/model');
const Program = require('../models/Program/model');
const User = require('../models/User/model');
const { roleNames } = require('shared');

const createItems = (num, createFunc) => {
    return Array.from({ length: num }).map(createFunc);
}

const createFirstUser = async () => {
    // Hash password
    const hashedPassword = await User.hashPassword('12345678');
    const firstUser = new User({
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@gmail.com',
        method: 'local',
        local: {
            password: hashedPassword
        },
        role: roleNames.ADMIN
    });
    const results = await seeder.insertData([firstUser]);
    return results[0];
}

const insertDataWithUser = async (dataToSeed, user) => {
    dataToSeed.map(item => {
        item.createdBy = item.updatedBy = user._id;
        return item;
    });

    return await seeder.insertData(dataToSeed)
}

const createDirectorates = async user => {
    const dataToSeed = [
        new Directorate({ title: 'SOJ2' }),
        new Directorate({ title: 'SOJ3' }),
        new Directorate({ title: 'SOJ6' })
    ];
    return insertDataWithUser(dataToSeed, user);
}

const createPrograms = async user => {
    const dataToSeed = [
        ...createItems(6, (item, index) => (new Program({ title: `Program ${chance.radio()}` })))
    ];
    return insertDataWithUser(dataToSeed, user);
}

const seedData = async () => {
    const firstUser = await createFirstUser();
    await createDirectorates(firstUser);
    await createPrograms(firstUser);
    console.log('Data seeded successfully...');
}

seedData();