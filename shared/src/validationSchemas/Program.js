const Yup = require('yup');
const { generateValidatorForSingleRecord, generateValidatorForMultipleRecords } = require('./helpers');

const defaultSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});

module.exports = {
    Program: {
        yupSchemas: {
            defaultSchema
        },
        graphqlMutations: {
            'ProgramCreateOne': generateValidatorForSingleRecord(defaultSchema),
            'ProgramUpdateById': generateValidatorForSingleRecord(defaultSchema),
        }
    }
}