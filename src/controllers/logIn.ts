import { Request, Response } from "express";
import { Users } from "../db/schema";

export const logIn = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    const getUser = await Users.find({
      password, email,

    });
    console.log(getUser)
    if (getUser.length > 0) {
      const data = { name: getUser[0].name, email, last_name: getUser[0].last_name, _id: getUser[0]._id }
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


