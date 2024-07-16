import { mongoDBConnection } from "../config";
import mongoose from "mongoose";
const uri = mongoDBConnection;

export async function connectDB() {
  try {
    mongoose
      .connect(uri, { autoIndex: true })
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.error("Connection error", error));
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
connectDB().catch(console.dir);
