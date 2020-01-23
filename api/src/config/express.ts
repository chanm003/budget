import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';

export const setupExpress = () => {
    const app = express();
    app.set('view engine', 'pug');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('*', cors());
    app.use(compression());
    return app;
};
