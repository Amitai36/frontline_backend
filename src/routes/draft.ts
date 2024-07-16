import { Router } from "express";
import { getAllDrafts, sendADraft} from "../controllers/draft";

const router = Router();
router.get("/getAllDraft", getAllDrafts);
router.post("/sendADraft", sendADraft);


export default router;
