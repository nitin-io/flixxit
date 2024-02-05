import { Router } from "express";
import signUpUser from "./signup-user.js";
import loginUser from "./login-user.js";

const router = Router();

router.post("/v1/signup", signUpUser);
router.post("/v1/signin", loginUser);

export default router;
