import { Request, Response } from "express";
import {Users } from "../db/schema";

export const signUp = async (req: Request, res: Response) => {
    try {
        const { password, email, firstName, lastName } = req.body;
        const getUser = await Users.find({
            email
        });
        console.log(getUser)
        if (getUser.length === 0) {
            const add = new Users({
                password,
                name: firstName,
                email,
                last_name: lastName
            });
            await add.save().then(async () => {
                const result = await Users.find({ email });
                const data = { name: result[0].name, email, last_name: result[0].last_name, _id: result[0]._id }
                res.send(data).status(204).end();
            });
        }
        else {
            const message = { message: 'user alredy exist' }
            res.status(403).json(message).end()
        }
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}


