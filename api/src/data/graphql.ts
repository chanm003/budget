import { ObjectId } from 'mongodb';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
<<<<<<< HEAD
import express, { Request } from 'express';
import { applyMiddleware } from 'graphql-middleware';

const { roleNames } = require('shared');

import { DirectorateResolver } from './entities/directorate/resolver';
import { UserResolver } from './entities/user/resolver';
import { TypegooseMiddleware } from './typegoose-middleware';
import { ObjectIdScalar } from './object-id.scalar';
import { verifyToken } from '../config/jwt';
import { User } from './entities/user/model';
import { permissionsMiddleware } from '../config/permissions';
import { validationMiddleware } from '../config/validation';

const parseUserFromRequest = (req: Request) => {
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
        resolvers: [DirectorateResolver, UserResolver],
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
        schema: applyMiddleware(
            schema,
            permissionsMiddleware,
            validationMiddleware,
        ),
        context: ({ req }) => {
            return {
                req,
                user: parseUserFromRequest(req),
            };
        },
=======
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
>>>>>>> 444d4e8372c3eb3ed71a021a0144e92f9907bbfc
    });
    server.applyMiddleware({ app, path: '/graphql' });
};
