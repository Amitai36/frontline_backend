import { Request, Response } from "express";
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const loginSchema = new Schema({
  email: String,
  password: String,
  name: String,
  last_name: String,

});

const Login = model("users", loginSchema);


export const logIn = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    const getUser = await Login.find({
      password, email,

    });
    console.log(getUser)
    if (getUser.length > 0) {
      const data = { name: getUser[0].name, email, last_name: getUser[0].last_name }
      res.status(200).json(data).end()
    }
    else {
      const message = { message: 'or email or password wrong' }
      res.status(403).json(message).end()
    }
  } catch (error) {
    res.status(500).send({ error }).end();
  }
}


