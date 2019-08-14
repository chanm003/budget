/**
 * On WINDOWS EXECUTE IN GIT BASH as administrator:
 *      winpty docker exec -it budget_api_1 //bin//sh
 *      cd seed
 *      node budgetCategory.js
 */
const seeder = require('../seed/seeder');
const BudgetCategory = require('../models/BudgetCategory');

const dataToSeed = [
    new BudgetCategory({
        title: 'Travel'
    }),
    new BudgetCategory({
        title: 'IT Service'
    })
];

seeder.insertData(dataToSeed);