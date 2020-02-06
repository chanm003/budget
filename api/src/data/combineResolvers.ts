import { DirectorateResolver } from './entities/directorate/resolver';
import { UserResolver } from './entities/user/resolver';

export const combinedResolvers = [DirectorateResolver, UserResolver];
