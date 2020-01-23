import express from 'express';
import compression from 'compression';
import cors from 'cors';

export const setupExpress = () => {
    const app = express();
    app.use('*', cors());
    app.use(compression());
    return app;
};
