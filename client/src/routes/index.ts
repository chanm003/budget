import core from './core';
import home from './home';
import directorate from './directorate';
import userprofile from './userprofile';
import { RouteDictionary } from '../interfaces';

// Combined routes
export const routes: RouteDictionary = Object.assign(
    core,
    home,
    directorate,
    userprofile,
);
