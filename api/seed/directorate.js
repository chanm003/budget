/**
 * On WINDOWS EXECUTE IN GIT BASH as administrator:
 *      winpty docker exec -it budget_api_1 //bin//sh
 *      cd seed
 *      node Directorate.js
 */
const seeder = require('./seeder');
const Directorate = require('../models/Directorate');

const dataToSeed = [
    new Directorate({
        title: 'SOJ3'
    }),
    new Directorate({
        title: 'SOJ6'
    })
];

seeder.insertData(dataToSeed);