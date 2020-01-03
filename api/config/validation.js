const { validators: DirectorateValidators } = require('../models/typeComposers/directorate');

const validationMiddleware = {
    Mutation: {
        ...DirectorateValidators
    }
}

module.exports = {
    validationMiddleware
}