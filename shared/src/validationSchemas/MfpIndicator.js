const Yup = require('yup');
const { generateValidatorForSingleRecord, generateValidatorForMultipleRecords } = require('./helpers');

const defaultSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});

module.exports = {
    MfpIndicator: {
        yupSchemas: {
            defaultSchema
        },
        graphqlMutations: {
            'MfpIndicatorCreateOne': generateValidatorForSingleRecord(defaultSchema),
            'MfpIndicatorUpdateById': generateValidatorForSingleRecord(defaultSchema),
        }
    }
}