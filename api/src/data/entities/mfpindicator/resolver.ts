import { ObjectId } from 'mongodb';
import {
    Resolver,
    Query,
    FieldResolver,
    Arg,
    Root,
    Mutation,
    Ctx,
} from 'type-graphql';

import {
    MfpIndicator,
    MfpIndicatorModel,
    MfpIndicatorInput,
} from './model';
import { User, UserModel } from '../user/model';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';

@Resolver(of => MfpIndicator)
export class MfpIndicatorResolver {
    @Query(returns => MfpIndicator, { nullable: true })
    MfpIndicatorById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
    ) {
        return MfpIndicatorModel.findById(id);
    }

    @Query(returns => [MfpIndicator])
    async MfpIndicatorMany(): Promise<MfpIndicator[]> {
        return await MfpIndicatorModel.find({});
    }

    @Mutation(returns => MfpIndicator)
    async MfpIndicatorCreateOne(
        @Arg('input') input: MfpIndicatorInput,
        @Ctx() { user }: Context,
    ): Promise<MfpIndicator> {
        const newItem = new MfpIndicatorModel({
            ...input,
            createdBy: user._id,
            updatedBy: user._id,
        } as MfpIndicator);

        return await newItem.save();
    }

    @Mutation(returns => MfpIndicator, { nullable: true })
    async MfpIndicatorUpdateById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Arg('input') input: MfpIndicatorInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await MfpIndicatorModel.findByIdAndUpdate(
            id,
            {
                ...input,
                updatedBy: user._id,
            },
            {
                new: true,
            },
        );

        return updatedItem;
    }

    @Mutation(returns => MfpIndicator, { nullable: true })
    async MfpIndicatorRemoveById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Ctx() { user }: Context,
    ) {
        const deletedItem = await MfpIndicatorModel.findByIdAndRemove(
            id,
        );
        return deletedItem;
    }

    @FieldResolver()
    async createdBy(@Root() item: MfpIndicator): Promise<User> {
        return (await UserModel.findById(item.createdBy))!;
    }

    @FieldResolver()
    async updatedBy(@Root() item: MfpIndicator): Promise<User> {
        return (await UserModel.findById(item.updatedBy))!;
    }
}
