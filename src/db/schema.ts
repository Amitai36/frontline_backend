import { Schema, model } from "mongoose";

const loginSchema = new Schema({
    email: String,
    password: String,
    name: String,
    last_name: String,

});

const emailsSchema = new Schema({
    form: String,
    to: [String],
    date: Number,
    subject: String,
    content: String,
});

export const Users = model("users", loginSchema);
export const Email = model("email", emailsSchema);