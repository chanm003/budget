import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import userRoutes from '../routes/users';
import seedRoutes from '../routes/seed';

export const setupExpress = () => {
    const viewsDirectory = path.join(__dirname, '../views');
    const app = express();
    app.set('views', viewsDirectory);
    app.set('view engine', 'pug');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('*', cors());
    app.use(compression());
    app.use('/api/users', userRoutes);
    app.use('/api/data', seedRoutes);
    app.use(express.static('public'));
    return app;
};
