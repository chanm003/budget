/**
 * On WINDOWS EXECUTE IN GIT BASH as administrator:
 *      winpty docker exec -it budget_api_1 //bin//sh (on Linux docker exec -it budget_api_1 sh )
 *      cd seed
 *      node dataToSeed.js
 */
var chance = require('chance').Chance();
const seeder = require('./seeder');
const Directorate = require('../models/directorate');
const Program = require('../models/program');
const User = require('../models/user');

const createItems = (num, createFunc) => {
    return Array.from({ length: num }).map(createFunc);
}

const createPrograms = num => {
    return createItems(num, (item, index) => (new Program({ title: `Program ${chance.radio()}` })));
}

const dataToSeed = [
    new Directorate({ title: 'SOJ2' }),
    new Directorate({ title: 'SOJ3' }),
    new Directorate({ title: 'SOJ6' }),
    //...createPrograms(6)
];

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
        role: 'admin'
    });
    const results = await seeder.insertData([firstUser]);
    return results[0];
}

const seedData = async () => {
    const firstUser = await createFirstUser();

    dataToSeed.map(item => {
        item.createdBy = item.updatedBy = firstUser._id;
        return item;
    })

    const results = await seeder.insertData(dataToSeed);
    console.log(results);
}

seedData();