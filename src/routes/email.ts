import { Router } from "express";
import { getAllEmails, sendAnEmail } from "../controllers/email";

const router = Router();
router.get("/getAllEmails", getAllEmails);
router.post("/sendAnEmail", sendAnEmail);


export default router;
