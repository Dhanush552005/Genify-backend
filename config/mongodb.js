import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    mongoose.set("bufferCommands", false);

    const db = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Genify",
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = db.connections[0].readyState === 1;

    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDB;
