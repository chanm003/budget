const types = `
    type Program {
        _id: ID!
        title: String!
    }

    input ProgramInput {
        title: String!
    }
`;

const queries = `
    programs: [Program!]!
    program(id: ID!): Program!
`;

const mutations = `
    createProgram(input: ProgramInput): Program!
    updateProgram(id: ID!, input: ProgramInput!): Program!
    removeProgram(id: ID!): Program!
`;

module.exports = {
    types,
    queries,
    mutations
}