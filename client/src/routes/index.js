import core from './core';
import home from './home';
import directorate from './directorate';
import userprofile from './userprofile'

// Combined routes
export const routes = Object.assign(core, home, directorate, userprofile);