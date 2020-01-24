import express from 'express';
import compression from 'compression';
<<<<<<< HEAD
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import userRoutes from '../routes/users';

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
    app.use(express.static('public'));
=======
import cors from 'cors';

export const setupExpress = () => {
    const app = express();
    app.use('*', cors());
    app.use(compression());
>>>>>>> 444d4e8372c3eb3ed71a021a0144e92f9907bbfc
    return app;
};
