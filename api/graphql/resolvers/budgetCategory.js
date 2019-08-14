const BudgetCategory = require('../../models/budgetCategory');

module.exports = {
    budgetCategories: async (args, req) => {
        const categories = await BudgetCategory.find();
        return categories;
    }
}