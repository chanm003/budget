import { ObjectId } from 'mongodb';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
const { roleNames } = require('shared');

import { DirectorateResolver } from './entities/directorate/resolver';
import { TypegooseMiddleware } from './typegoose-middleware';
import { ObjectIdScalar } from './object-id.scalar';
import { verifyToken } from '../config/jwt';
import { User } from './entities/user/model';

const parseUserFromRequest = (req: any) => {
    let currentUser: Partial<User> = { role: roleNames.VISITOR };
    try {
        let authHeader = req.headers['authorization'] || '';
        authHeader = authHeader && authHeader.replace('Bearer ', '');
        currentUser = verifyToken(authHeader).user;
    } catch (e) {
        return currentUser;
    }
    return currentUser;
};

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

export const configureGraphQL = async (app: express.Application) => {
    const schema = await generateSchema();

    const server = new ApolloServer({
        schema,
        context: ({ req }) => {
            return {
                req,
                user: parseUserFromRequest(req),
            };
        },
    });
    server.applyMiddleware({ app, path: '/graphql' });
};
