import express from "express";
import dotenv from "dotenv";
import api from "./api";
import { connectDB } from "./db/mongoose";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env["PORT"];
app.use("/", api);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
