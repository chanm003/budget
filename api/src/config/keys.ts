import dotenv from 'dotenv';

dotenv.config();

export default {
    isDevelopmentMode: process.env.NODE_ENV === 'development',
    jsonWebTokenSecret: process.env.JSON_WEB_TOKEN_SECRET || '',
};
