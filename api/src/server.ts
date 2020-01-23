import 'graphql-import-node';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';

import * as typeDefs from './schema/schema.graphql';

const app = express();
const server = new ApolloServer({
    typeDefs,
    introspection: true,
    mocks: true,
    mockEntireSchema: false,
    playground: true,
});
app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen({ port: 9000 }, (): void =>
    console.log('Apollo Server Express GraphQL Server up'),
);
