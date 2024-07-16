import express from "express";
import users from "./routes/user"
const app = express();

app.use("/users", users);
export default app;
