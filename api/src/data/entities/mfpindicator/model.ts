import { prop as Property, Typegoose } from 'typegoose';
import { ObjectId } from 'mongodb';
import { Field, InputType, ObjectType } from 'type-graphql';

import { User } from '../user/model';
import { Ref } from '../../../types';

@ObjectType()
export class MfpIndicator extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ required: true })
    title: string;

    @Property({ default: () => Date.now() })
    @Field()
    createdAt: Date;

    @Field(type => User)
    @Property({ ref: User, required: true })
    createdBy: Ref<User>;

    @Property({ default: () => Date.now() })
    @Field()
    updatedAt: Date;

    @Field(type => User)
    @Property({ ref: User, required: true })
    updatedBy: Ref<User>;
}

export const MfpIndicatorModel = new MfpIndicator().getModelForClass(
    MfpIndicator,
    {
        schemaOptions: { timestamps: true },
    },
);

@InputType()
export class MfpIndicatorInput implements Partial<MfpIndicator> {
    @Field()
    title: string;
}
