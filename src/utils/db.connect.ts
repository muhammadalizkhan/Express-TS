import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017";

export async function dbConnect() {
  return mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
