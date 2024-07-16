import { Router } from "express";
import {  logIn } from "../controllers/logIn";

const router = Router();
router.post("/logIn", logIn);


export default router;
