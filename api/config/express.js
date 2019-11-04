const bodyParser = require('body-parser');

const configureExpress = express => {
    express.use(bodyParser.urlencoded({ extended: false }));
    express.use(bodyParser.json());
    express.use('/api/users', require('../routes/users'));
}

module.exports = {
    configureExpress
}