import 'reflect-metadata';
import { createServer } from 'http';

import { connectToDatabase } from './data/database';
import { seedDatabase } from './data/seed';
import { configureGraphQL } from './data/graphql';
import { setupExpress } from './config/express';

async function bootstrap() {
    try {
        await connectToDatabase(true);
        await seedDatabase();

        const expressApp = setupExpress();
        configureGraphQL(expressApp);

        const httpServer = createServer(expressApp);
        httpServer.listen({ port: 9000 }, (): void =>
            console.log('Apollo Server Express GraphQL server up'),
        );
    } catch (err) {
        console.error(err);
    }
}

bootstrap();
