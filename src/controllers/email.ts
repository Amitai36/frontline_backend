import { Request, Response } from "express";
import { Email } from "../db/schema";

export const getAllEmails = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
        const emails = await Email.find({ toUser: email })
        res.json(emails).status(200)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}
export const sendAnEmail = async (req: Request, res: Response) => {
    try {
        const { toUsers, content, subject, userName } = req.body;
        for (let i = 0; i < (toUsers as string[]).length; i++) {
            const addEmail = new Email({
                content, date: new Date().getTime(), from: userName, subject, toUser: (toUsers as string[])[i]
            });
            await addEmail.save().then(async () => {
                res.status(204).end();
            });

        }
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}


