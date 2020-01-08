const Yup = require('yup');
const { generateValidatorForSingleRecord, generateValidatorForMultipleRecords } = require('./helpers');

const defaultSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});

module.exports = {
    Directorate: {
        yupSchemas: {
            defaultSchema
        },
        graphqlMutations: {
            'DirectorateCreateOne': generateValidatorForSingleRecord(defaultSchema),
            'DirectorateCreateMany': generateValidatorForMultipleRecords(defaultSchema),
            'DirectorateUpdateById': generateValidatorForSingleRecord(defaultSchema),
        }
    }
}