const express = require('express')

module.exports = function (app) {
    // HTTP request parsers
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // CORS headers
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        if (req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }
        next();
    });
}