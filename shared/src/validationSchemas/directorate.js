const Yup = require('yup');

const directorateSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});

module.exports = {
    directorateSchema
}