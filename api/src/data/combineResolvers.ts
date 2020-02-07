import { DirectorateResolver } from './entities/directorate/resolver';
import { ProgramResolver } from './entities/program/resolver';
import { UserResolver } from './entities/user/resolver';

export const combinedResolvers = [
    DirectorateResolver,
    ProgramResolver,
    UserResolver,
];
