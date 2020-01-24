import { ObjectId } from 'mongodb';
<<<<<<< HEAD
import { User } from './data/entities/user/model';
=======
import { User } from './data/entities/user';
>>>>>>> 444d4e8372c3eb3ed71a021a0144e92f9907bbfc

export type Ref<T> = T | ObjectId;

export interface Context {
    user: User;
}
