import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://genify-client.vercel.app",
      "https://genify-client-six.vercel.app",
    ],
    credentials: true,
  })
);

app.options("*", cors());

connectDB();

app.get("/", (req, res) => {
  res.send("API WORKING ");
});

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

export default app;
