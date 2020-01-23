import { ObjectId } from 'mongodb';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { DirectorateResolver } from './entities/directorate/resolver';
import { TypegooseMiddleware } from './typegoose-middleware';
import { ObjectIdScalar } from './object-id.scalar';
import { Context } from '../types';

export const generateSchema = async () => {
    const locationForGeneratedFile = path.resolve(
        __dirname,
        'schema.gql',
    );
    const schema = await buildSchema({
        resolvers: [DirectorateResolver],
        emitSchemaFile: locationForGeneratedFile,
        globalMiddlewares: [TypegooseMiddleware],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    });
    console.log(`Schema generated at ${locationForGeneratedFile}`);
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
