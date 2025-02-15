import mongoose from "mongoose";
import { env } from "./env";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(env.db.uri,{
      dbName: env.db.name
    });
    if (connection.connection.readyState === 1) {
      console.log(
        `Connected to ${connection.connection.name} database | Host: ${connection.connection.host}`
      );
    }
  } catch (error:any) {
    console.error("Error connecting to MongoDB:", error);
  }
};  

export default connectDB;
