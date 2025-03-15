import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) return console.error("MONGODB_URI couldn't be found.");
    const conn = await mongoose.connect(uri, { dbName: "MaheshHandicrafts" });
    if (!conn) return console.error("Couldn't connect to the DB.");
  } catch (error) {
    console.error("Couldn't connect to the DB.", error);
    return null;
  }
};
