import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:8000",
  "https://genify-client-six.vercel.app",
];

import cors from "cors";

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://genify-client.vercel.app"
  ],
  credentials: true,
}));


app.get('/', (req, res) => {
  return res.send("API WORKING");
});

(async () => {
  try {
    await connectDB();
    app.use('/api/user', userRouter);
    app.use('/api/image', imageRouter);
    app.listen(PORT, '0.0.0.0', () => {
      console.log("Server running on port " + PORT);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
})();
