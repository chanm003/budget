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

import { Program, ProgramModel, ProgramInput } from './model';
import { User, UserModel } from '../user/model';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';

@Resolver(of => Program)
export class ProgramResolver {
    @Query(returns => Program, { nullable: true })
    ProgramById(@Arg('id', type => ObjectIdScalar) id: ObjectId) {
        return ProgramModel.findById(id);
    }

    @Query(returns => [Program])
    async ProgramMany(): Promise<Program[]> {
        return await ProgramModel.find({});
    }

    @Mutation(returns => Program)
    async ProgramCreateOne(
        @Arg('input') input: ProgramInput,
        @Ctx() { user }: Context,
    ): Promise<Program> {
        const newItem = new ProgramModel({
            ...input,
            createdBy: user._id,
            updatedBy: user._id,
        } as Program);

        return await newItem.save();
    }

    @Mutation(returns => Program, { nullable: true })
    async ProgramUpdateById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Arg('input') input: ProgramInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await ProgramModel.findByIdAndUpdate(
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

    @Mutation(returns => Program, { nullable: true })
    async ProgramRemoveById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Ctx() { user }: Context,
    ) {
        const deletedItem = await ProgramModel.findByIdAndRemove(id);
        return deletedItem;
    }

    @FieldResolver()
    async createdBy(@Root() item: Program): Promise<User> {
        return (await UserModel.findById(item.createdBy))!;
    }

    @FieldResolver()
    async updatedBy(@Root() item: Program): Promise<User> {
        return (await UserModel.findById(item.updatedBy))!;
    }
}
