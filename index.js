import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
import dbMiddleware from "./middleware/db.js";
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

app.get("/", (req, res) => {
  res.send("API WORKING ✅");
});

/* 🔥 ENSURE DB IS READY BEFORE ROUTES */
app.use(dbMiddleware);

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

export default app;
