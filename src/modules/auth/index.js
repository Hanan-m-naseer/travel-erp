import express from "express";
import makeCallback from "../../common/helpers/makeCallback.js";
import { loginController, logoutController, signUpController } from "./controller/index.js";

const router = express.Router();

router.post("/signup", makeCallback(signUpController));
router.post("/login", makeCallback(loginController));
router.post("/logout", makeCallback(logoutController));

export default router;