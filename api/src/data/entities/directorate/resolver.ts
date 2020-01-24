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

import { Directorate, DirectorateModel } from './model';
import { User, UserModel } from '../user/model';
import { DirectorateInput } from './input';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';

@Resolver(of => Directorate)
export class DirectorateResolver {
    @Query(returns => Directorate, { nullable: true })
    DirectorateById(@Arg('id', type => ObjectIdScalar) id: ObjectId) {
        return DirectorateModel.findById(id);
    }

    @Query(returns => [Directorate])
    async DirectorateMany(): Promise<Directorate[]> {
        return await DirectorateModel.find({});
    }

    @Mutation(returns => Directorate)
    async DirectorateCreateOne(
        @Arg('input') input: DirectorateInput,
        @Ctx() { user }: Context,
    ): Promise<Directorate> {
        const newItem = new DirectorateModel({
            ...input,
            createdBy: user._id,
            updatedBy: user._id,
        } as Directorate);

        return await newItem.save();
    }

    @Mutation(returns => Directorate, { nullable: true })
    async DirectorateUpdateById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Arg('input') input: DirectorateInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await DirectorateModel.findByIdAndUpdate(
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

    @Mutation(returns => Directorate, { nullable: true })
    async DirectorateRemoveById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Ctx() { user }: Context,
    ) {
        const deletedItem = await DirectorateModel.findByIdAndRemove(
            id,
        );
        return deletedItem;
    }

    @FieldResolver()
    async createdBy(@Root() item: Directorate): Promise<User> {
        return (await UserModel.findById(item.createdBy))!;
    }

    @FieldResolver()
    async updatedBy(@Root() item: Directorate): Promise<User> {
        return (await UserModel.findById(item.updatedBy))!;
    }
}
