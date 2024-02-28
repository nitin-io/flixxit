import { Router } from "express";
import signUpUser from "./user.controllers.js";
import loginUser from "./user.controllers.js";

const router = Router();

router.post("/v1/signup", signUpUser);
router.post("/v1/signin", loginUser);

export default router;
