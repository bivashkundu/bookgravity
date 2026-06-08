import mongoose from 'mongoose';
import { environment } from './environment.js';

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(environment.MONGODB_URI);
    console.log(`🚀 MongoDB connected to: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Error in database connection:', error);
    process.exit(1);
  }
};

export default dbConnect;
