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
    ExpenditureType,
    ExpenditureTypeModel,
    ExpenditureTypeInput,
} from './model';
import { User, UserModel } from '../user/model';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';

@Resolver(of => ExpenditureType)
export class ExpenditureTypeResolver {
    @Query(returns => ExpenditureType, { nullable: true })
    ExpenditureTypeById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
    ) {
        return ExpenditureTypeModel.findById(id);
    }

    @Query(returns => [ExpenditureType])
    async ExpenditureTypeMany(): Promise<ExpenditureType[]> {
        return await ExpenditureTypeModel.find({});
    }

    @Mutation(returns => ExpenditureType)
    async ExpenditureTypeCreateOne(
        @Arg('input') input: ExpenditureTypeInput,
        @Ctx() { user }: Context,
    ): Promise<ExpenditureType> {
        const newItem = new ExpenditureTypeModel({
            ...input,
            createdBy: user._id,
            updatedBy: user._id,
        } as ExpenditureType);

        return await newItem.save();
    }

    @Mutation(returns => ExpenditureType, { nullable: true })
    async ExpenditureTypeUpdateById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Arg('input') input: ExpenditureTypeInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await ExpenditureTypeModel.findByIdAndUpdate(
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

    @Mutation(returns => ExpenditureType, { nullable: true })
    async ExpenditureTypeRemoveById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Ctx() { user }: Context,
    ) {
        const deletedItem = await ExpenditureTypeModel.findByIdAndRemove(
            id,
        );
        return deletedItem;
    }

    @FieldResolver()
    async createdBy(@Root() item: ExpenditureType): Promise<User> {
        return (await UserModel.findById(item.createdBy))!;
    }

    @FieldResolver()
    async updatedBy(@Root() item: ExpenditureType): Promise<User> {
        return (await UserModel.findById(item.updatedBy))!;
    }
}
