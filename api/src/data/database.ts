import { connect } from 'mongoose';

import { seedDatabase } from './seed';

export const connectToDatabase = async (
    shouldSeedDatabase = true,
) => {
    const mongoose = await connect('mongodb://mongodb:27017/budget');
    //await mongoose.connection.db.dropDatabase();
    if (shouldSeedDatabase) {
        await seedDatabase();
    }
};
