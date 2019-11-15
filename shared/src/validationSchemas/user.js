const yup = require('yup');

const loginSchema = yup.object().shape({
    email: yup.string()
        .trim()
        .email('Email must be in correct format')
        .required('Email is required')
    ,
    password: yup.string()
        .trim()
        .required('Password is required')
});

module.exports = {
    loginSchema
}