import { Router } from "express";
import { logIn } from "../controllers/logIn";
import { signUp } from "../controllers/signUp";

const router = Router();
router.post("/logIn", logIn);
router.post("/signUp", signUp);


export default router;
