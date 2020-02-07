import core from './modules/core/routes';
import home from './modules/home/routes';
import directorate from './modules/directorate/routes';
import executionmethod from './modules/executionmethod/routes';
import mfpindicator from './modules/mfpindicator/routes';
import program from './modules/program/routes';
import userprofile from './modules/userprofile/routes';
import { RouteDictionary } from './interfaces';

// Combined routes
export const routeConfig: RouteDictionary = Object.assign(
    core,
    home,
    directorate,
    executionmethod,
    mfpindicator,
    program,
    userprofile,
);
