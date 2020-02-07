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
    ExecutionMethod,
    ExecutionMethodModel,
    ExecutionMethodInput,
} from './model';
import { User, UserModel } from '../user/model';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';

@Resolver(of => ExecutionMethod)
export class ExecutionMethodResolver {
    @Query(returns => ExecutionMethod, { nullable: true })
    ExecutionMethodById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
    ) {
        return ExecutionMethodModel.findById(id);
    }

    @Query(returns => [ExecutionMethod])
    async ExecutionMethodMany(): Promise<ExecutionMethod[]> {
        return await ExecutionMethodModel.find({});
    }

    @Mutation(returns => ExecutionMethod)
    async ExecutionMethodCreateOne(
        @Arg('input') input: ExecutionMethodInput,
        @Ctx() { user }: Context,
    ): Promise<ExecutionMethod> {
        const newItem = new ExecutionMethodModel({
            ...input,
            createdBy: user._id,
            updatedBy: user._id,
        } as ExecutionMethod);

        return await newItem.save();
    }

    @Mutation(returns => ExecutionMethod, { nullable: true })
    async ExecutionMethodUpdateById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Arg('input') input: ExecutionMethodInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await ExecutionMethodModel.findByIdAndUpdate(
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

    @Mutation(returns => ExecutionMethod, { nullable: true })
    async ExecutionMethodRemoveById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Ctx() { user }: Context,
    ) {
        const deletedItem = await ExecutionMethodModel.findByIdAndRemove(
            id,
        );
        return deletedItem;
    }

    @FieldResolver()
    async createdBy(@Root() item: ExecutionMethod): Promise<User> {
        return (await UserModel.findById(item.createdBy))!;
    }

    @FieldResolver()
    async updatedBy(@Root() item: ExecutionMethod): Promise<User> {
        return (await UserModel.findById(item.updatedBy))!;
    }
}
