import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./routes/auth.js";

import cors from "cors";
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

mongoose.connect("mongodb://127.0.0.1:27017/booking_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});

//middleware
app.use(express.json());

app.use(cors(corsOptions));
dotenv.config();

app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
