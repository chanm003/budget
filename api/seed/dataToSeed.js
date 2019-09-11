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

const createItems = (num, createFunc) => {
    return Array.from({ length: num }).map(createFunc);
}

const createPrograms = num => {
    return createItems(num, (item, index) => ( new Program({ title: `Program ${chance.radio()}` })));
}

const dataToSeed = [
    new Directorate({ title: 'SOJ2' }),
    new Directorate({ title: 'SOJ3' }),
    new Directorate({ title: 'SOJ6' }),
    ...createPrograms(6)
];

seeder.insertData(dataToSeed);