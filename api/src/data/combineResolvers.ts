import { DirectorateResolver } from './entities/directorate/resolver';
import { ExecutionMethodResolver } from './entities/executionmethod/resolver';
import { MfpIndicatorResolver } from './entities/mfpindicator/resolver';
import { ProgramResolver } from './entities/program/resolver';
import { UserResolver } from './entities/user/resolver';

export const combinedResolvers = [
    DirectorateResolver,
    ExecutionMethodResolver,
    MfpIndicatorResolver,
    ProgramResolver,
    UserResolver,
];
