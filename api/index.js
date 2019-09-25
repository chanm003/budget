
const { createServer, startOptions } = require('./config/graphql');
const connectToDatabase = require('./config/database');

connectToDatabase(
    () => {
        const server = createServer();
        server.start(startOptions, () => console.log("GraphQL Server up"));
    },
    err => console.log(err)
);