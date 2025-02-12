import mongoose from 'mongoose';
import { NODE_ENV, DATABASE_URI } from "../config/env.js";


if(!DATABASE_URI) {
    throw new Error("Please define the DATABASE_URI environment variable inside .env.<development/production>.local")
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URI)
        console.log(`Connected to database in ${NODE_ENV} mode`)
    } catch (error) {
        console.log('Error connnecting to database: ', error)
        process.exit(1)
    }
}

export default connectToDatabase;
