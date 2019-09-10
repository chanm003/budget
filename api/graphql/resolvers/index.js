const directorateResolver = require('./directorate');
const programResolver = require('./program');

module.exports = {
    ...directorateResolver,
    ...programResolver
}