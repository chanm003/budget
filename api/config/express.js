const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const configureExpress = app => {
    app.set('view engine', 'jade');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/api/users', require('../routes/users'));
    app.use(express.static('public'));
}

module.exports = {
    configureExpress
}