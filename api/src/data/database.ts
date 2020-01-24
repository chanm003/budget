import { connect } from 'mongoose';

<<<<<<< HEAD
import { seedDatabase } from './seed';

export const connectToDatabase = async (
    shouldSeedDatabase = true,
) => {
    const mongoose = await connect('mongodb://mongodb:27017/budget');
    //await mongoose.connection.db.dropDatabase();
    if (shouldSeedDatabase) {
        await seedDatabase();
    }
=======
export const connectToDatabase = async (shouldSeedData = true) => {
    const mongoose = await connect('mongodb://mongodb:27017/budget');
    await mongoose.connection.db.dropDatabase();
>>>>>>> 444d4e8372c3eb3ed71a021a0144e92f9907bbfc
};
