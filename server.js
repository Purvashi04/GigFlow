import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/bids", bidRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
