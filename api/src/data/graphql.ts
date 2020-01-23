import { ObjectId } from 'mongodb';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { RecipeResolver } from './resolvers/recipe-resolver';
import { RateResolver } from './resolvers/rate-resolver';
import { TypegooseMiddleware } from './typegoose-middleware';
import { ObjectIdScalar } from './object-id.scalar';
import { Context } from '../types';

export const generateSchema = async () => {
    const schema = await buildSchema({
        resolvers: [RecipeResolver, RateResolver],
        emitSchemaFile: path.resolve(__dirname, 'data', 'schema.gql'),
        globalMiddlewares: [TypegooseMiddleware],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    });
    return schema;
};

export const configureGraphQL = async (
    app: express.Application,
    context: Context,
) => {
    const schema = await generateSchema();

    const server = new ApolloServer({
        schema,
        context,
    });
    server.applyMiddleware({ app, path: '/graphql' });
};
