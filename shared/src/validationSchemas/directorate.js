const Yup = require('yup');
const { generateValidatorForSingleRecord, generateValidatorForMultipleRecords } = require('./helpers');

const directorateSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});

module.exports = {
    Directorate: {
        yupSchemas: {
            directorateSchema
        },
        graphqlMutations: {
            'DirectorateCreateOne': generateValidatorForSingleRecord(directorateSchema),
            'DirectorateCreateMany': generateValidatorForMultipleRecords(directorateSchema),
            'DirectorateUpdateById': generateValidatorForSingleRecord(directorateSchema),
        }
    }
}