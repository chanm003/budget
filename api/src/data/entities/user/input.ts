import { InputType, Field } from 'type-graphql';

import { User } from './model';

@InputType()
export class UserInput implements Partial<User> {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;
}
