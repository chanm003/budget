const Yup = require('yup');
const { generateValidatorForSingleRecord, generateValidatorForMultipleRecords } = require('./helpers');

const defaultSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});

module.exports = {
    ExpenditureType: {
        yupSchemas: {
            defaultSchema
        },
        graphqlMutations: {
            'ExpenditureTypeCreateOne': generateValidatorForSingleRecord(defaultSchema),
            'ExpenditureTypeUpdateById': generateValidatorForSingleRecord(defaultSchema),
        }
    }
}