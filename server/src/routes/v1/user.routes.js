import { Router } from "express";
import { signUpUser, loginUser } from "../../controllers/user.controllers.js";

const router = Router();

router.post("/signup", signUpUser);
router.post("/signin", loginUser);

export default router;
