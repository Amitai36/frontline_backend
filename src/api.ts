import express from "express";
import users from "./routes/user"
import email from "./routes/email"
import draft from "./routes/draft"
const app = express();

app.use("/users", users);
app.use("/email", email);
app.use("/draft", draft);
export default app;
