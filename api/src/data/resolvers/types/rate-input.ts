import { ObjectId } from 'mongodb';
import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class RateInput {
    @Field()
    recipeId: ObjectId;

    @Field(type => Int)
    value: number;
}
