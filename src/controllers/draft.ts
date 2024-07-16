import { Request, Response } from "express";
import { Draft } from "../db/schema";

export const getAllDrafts = async (req: Request, res: Response) => {
    try {
        const { userId } = req.query;
        const drafts = await Draft.find({ userId })
        res.json(drafts).status(200)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}
export const sendADraft = async (req: Request, res: Response) => {
    try {
        const { toUsers, content, subject, userName, userId } = req.body;
        const addDraft = new Draft({
            content, date: new Date().getTime(), from: userName, subject, toUser: (toUsers as string[]), userId
        });
        await addDraft.save().then(async () => {
            res.status(204).end();
        });
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}


