const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type BudgetCategory {
    _id: ID!
    title: String!
}

type RootQuery {
    budgetCategories: [BudgetCategory!]!
}

schema {
    query: RootQuery
}
`);