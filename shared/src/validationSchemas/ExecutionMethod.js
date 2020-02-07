const Yup = require('yup');
const { generateValidatorForSingleRecord, generateValidatorForMultipleRecords } = require('./helpers');

const defaultSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});

module.exports = {
    ExecutionMethod: {
        yupSchemas: {
            defaultSchema
        },
        graphqlMutations: {
            'ExecutionMethodCreateOne': generateValidatorForSingleRecord(defaultSchema),
            'ExecutionMethodUpdateById': generateValidatorForSingleRecord(defaultSchema),
        }
    }
}