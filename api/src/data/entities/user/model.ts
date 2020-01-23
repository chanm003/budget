import { prop as Property, Typegoose } from 'typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
const { roleNames } = require('shared');

@ObjectType()
class CacIdentity {
    @Field()
    @Property({ required: true })
    distinguishedName: string;
}

@ObjectType()
class GithubIdentity {
    @Field()
    @Property({ required: true })
    id: string;
}

@ObjectType()
class LocalIdentity {
    @Property({ required: true })
    password: string;

    @Field()
    @Property({ default: new Date(), required: true })
    expires: Date;
}

@ObjectType()
export class User extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ default: '' })
    firstName: string;

    @Field()
    @Property({ default: '' })
    lastName: string;

    @Field()
    @Property({ default: '', lowercase: true })
    email: string;

    @Field()
    @Property({ required: true, enum: ['local', 'cac', 'github'] })
    method: string;

    @Field({ nullable: true })
    @Property({ _id: false })
    cac?: CacIdentity;

    @Field({ nullable: true })
    @Property({ _id: false })
    github?: GithubIdentity;

    @Field({ nullable: true })
    @Property({ _id: false })
    local?: LocalIdentity;

    @Field()
    @Property({ default: new Date() })
    lastLoggedIn: Date;

    @Field()
    @Property({ default: roleNames.LOGGED_IN_USER })
    role: string;
}

export const UserModel = new User().getModelForClass(User, {
    schemaOptions: { timestamps: true },
});
