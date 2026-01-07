import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  mongoose.set("bufferCommands", false);

  const db = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Genify",
    serverSelectionTimeoutMS: 5000,
  });

  isConnected = db.connections[0].readyState === 1;
  console.log("✅ Database Connected");
};

export default connectDB;
