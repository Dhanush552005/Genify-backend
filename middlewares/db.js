import connectDB from "../config/mongodb.js";

const dbMiddleware = async (req, res, next) => {
  try {
    await connectDB(); // 🔥 THIS IS THE KEY
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
};

export default dbMiddleware;
