import { ObjectId } from 'mongodb';
import { User } from './data/entities/user/model';

export type Ref<T> = T | ObjectId;

export interface Context {
    user: User;
}
