import { Router } from "express";
import signUpUser from "./signUpUser.js";

const router = Router();

router.post("/v1/signup", signUpUser);

export default router;
