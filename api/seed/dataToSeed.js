/**
 * On WINDOWS EXECUTE IN GIT BASH as administrator:
 *      winpty docker exec -it budget_api_1 //bin//sh
 *      cd seed
 *      node dataToSeed.js
 */
const faker = require('faker');
const seeder = require('./seeder');
const Directorate = require('../models/Directorate');
const Program = require('../models/Program');

const createItems = (num, createFunc) => {
    return Array.from({ length: num }).map(createFunc);
}

const createPrograms = num => {
    return createItems(num, (item, index) => ( new Program({ title: `Program ${faker.hacker.abbreviation()}` })));
}

const dataToSeed = [
    new Directorate({ title: 'SOJ2' }),
    new Directorate({ title: 'SOJ3' }),
    new Directorate({ title: 'SOJ6' }),
    ...createPrograms(6)
];

seeder.insertData(dataToSeed);