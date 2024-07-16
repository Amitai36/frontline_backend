import express from "express";
import users from "./routes/user"
import email from "./routes/email"
const app = express();

app.use("/users", users);
app.use("/email", email);
export default app;
