import { DirectorateResolver } from './entities/directorate/resolver';
import { MfpIndicatorResolver } from './entities/mfpindicator/resolver';
import { ProgramResolver } from './entities/program/resolver';
import { UserResolver } from './entities/user/resolver';

export const combinedResolvers = [
    DirectorateResolver,
    MfpIndicatorResolver,
    ProgramResolver,
    UserResolver,
];
