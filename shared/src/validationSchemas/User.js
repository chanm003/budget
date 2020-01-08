const Yup = require('yup');

function equalTo(ref, msg) {
    return Yup.mixed().test({
        name: 'equalTo',
        exclusive: false,
        message: msg || '${path} must be the same as ${reference}',
        params: {
            reference: ref.path,
        },
        test: function (value) {
            return value === this.resolve(ref);
        },
    });
}
Yup.addMethod(Yup.string, 'equalTo', equalTo);

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .email('Email must be in correct format')
        .required('Email is required')
    ,
    password: Yup.string()
        .trim()
        .required('Password is required')
});

const registrationSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .email('Email must be in correct format')
        .required('Email is required')
    ,
    password: Yup.string()
        .trim()
        .min(8, 'Password must be at least eight characters')
        .required('Password is required')
    ,
    passwordConfirm: Yup.string()
        .equalTo(Yup.ref('password'), 'Passwords must match')
        .required('Confirm Password is required')
});

const userprofileSchema = Yup.object().shape({
    firstName: Yup.string()
        .trim()
        .required('First Name is required')
    ,
    lastName: Yup.string()
        .trim()
        .required('Last Name is required')
    ,
    email: Yup.string()
        .trim()
        .email('Email must be in correct format')
        .required('Email is required')
});

module.exports = {
    User: {
        yupSchemas: {
            loginSchema,
            registrationSchema,
            userprofileSchema
        }
    }
}