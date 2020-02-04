import { connect } from 'mongoose';

export const connectToDatabase = async () => {
    const mongoose = await connect('mongodb://mongodb:27017/budget');
    //await mongoose.connection.db.dropDatabase();
};
