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
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.get("/", (req, res) => {
  res.send("API WORKING ✅");
});

await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);


export default app;
