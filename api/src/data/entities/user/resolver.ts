import { ObjectId, ObjectID } from 'mongodb';
import {
    Resolver,
    Query,
    FieldResolver,
    Arg,
    Root,
    ObjectType,
    Field,
    Mutation,
    Ctx,
} from 'type-graphql';

import { User, UserModel } from './model';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';
import { UserInput } from './input';
import { signToken } from '../../../config/jwt';

@ObjectType()
class UpdateMyProfileResult {
    @Field()
    user: User;

    @Field()
    token: string;
}

@Resolver(of => User)
export class UserResolver {
    @Query(returns => User, { nullable: true })
    UserById(@Arg('id', type => ObjectIdScalar) id: ObjectId) {
        return UserModel.findById(id);
    }

    @Mutation(returns => UpdateMyProfileResult, { nullable: true })
    async UserUpdateMyProfile(
        @Arg('input') input: UserInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await UserModel.findByIdAndUpdate(
            user._id,
            {
                ...input,
            },
            {
                new: true,
            },
        );

        return {
            user: updatedItem,
            token: signToken(updatedItem as User),
        };
    }
}
