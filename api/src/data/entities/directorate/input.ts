import { InputType, Field } from 'type-graphql';

import { Directorate } from './model';

@InputType()
export class DirectorateInput implements Partial<Directorate> {
    @Field()
    title: string;
}
